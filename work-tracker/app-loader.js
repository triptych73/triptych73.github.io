(() => {
  const documentIds = ["programme-index", "programme-accounting"];
  const loginUrl = "https://stmsltd.uk/login.html";
  const imageUrlCache = new Map();
  let authenticatedUser = null;

  function setStatus(message) {
    const update = () => {
      const element = document.getElementById("hostedLoadingStatus");
      if (element) element.textContent = message;
    };
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", update, { once: true });
    else update();
  }

  function dismissOverlay() {
    const dismiss = () => {
      const overlay = document.getElementById("hostedLoadingOverlay");
      if (overlay) overlay.hidden = true;
    };
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", dismiss, { once: true });
    else dismiss();
  }

  window.WORK_TRACKER_WEEK_LOADER = async (weekKey) => {
    if (!authenticatedUser) throw new Error("Your STMS session is not ready.");
    const snapshot = await firebase.firestore()
      .collection("artifacts")
      .doc("work-tracker")
      .collection("evidence-weeks")
      .doc(weekKey)
      .get();
    if (!snapshot.exists) throw new Error(`Evidence for ${weekKey} has not been published.`);
    const detail = JSON.parse(snapshot.data().payload);
    await mapWithConcurrency(detail.media || [], 6, async (item) => {
      if (item.kind !== "image" || !item.firestore_image_id) {
        item.url = "";
        return;
      }
      try {
        item.url = await loadImageUrl(item.firestore_image_id);
      } catch (error) {
        item.url = "";
        item.hosted_media_error = error.message || "Image unavailable";
      }
    });
    return detail;
  };

  async function loadImageUrl(documentId) {
    if (!imageUrlCache.has(documentId)) imageUrlCache.set(documentId, (async () => {
      const snapshot = await firebase.firestore()
        .collection("artifacts")
        .doc("work-tracker")
        .collection("evidence-images")
        .doc(documentId)
        .get();
      if (!snapshot.exists) throw new Error("The image preview has not been uploaded.");
      const data = snapshot.data();
      const bytes = data.bytes?.toUint8Array ? data.bytes.toUint8Array() : null;
      if (!bytes) throw new Error("The stored image preview is invalid.");
      return URL.createObjectURL(new Blob([bytes], { type: data.content_type || "image/webp" }));
    })());
    return imageUrlCache.get(documentId);
  }

  async function mapWithConcurrency(items, limit, worker) {
    let cursor = 0;
    await Promise.all(Array.from({ length: Math.min(limit, items.length) }, async () => {
      while (cursor < items.length) {
        const index = cursor;
        cursor += 1;
        await worker(items[index], index);
      }
    }));
  }

  window.WORK_TRACKER_DATA_PROMISE = new Promise((resolve, reject) => {
    if (!window.firebase || !window.firebaseConfig) {
      reject(new Error("The STMS authentication service is unavailable."));
      return;
    }
    if (!firebase.apps.length) firebase.initializeApp(window.firebaseConfig);

    firebase.auth().onAuthStateChanged(async (user) => {
      if (!user) {
        setStatus("Sign in to the STMS portal to open the work tracker.");
        window.location.replace(loginUrl);
        return;
      }
      try {
        authenticatedUser = user;
        setStatus("Loading protected programme data...");
        const snapshots = await Promise.all(documentIds.map((id) => firebase.firestore()
          .collection("artifacts")
          .doc("work-tracker")
          .collection("data")
          .doc(id)
          .get()));
        if (snapshots.some((snapshot) => !snapshot.exists)) throw new Error("The protected work-tracker dataset has not been published.");
        const payloads = snapshots.map((snapshot) => JSON.parse(snapshot.data().payload));
        resolve({ index: payloads[0], accounting: payloads[1] });
        window.setTimeout(dismissOverlay, 250);
      } catch (error) {
        setStatus(error.message || "Unable to load protected programme data.");
        reject(error);
      }
    });
  });
})();
