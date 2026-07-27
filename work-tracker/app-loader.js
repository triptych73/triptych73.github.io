(() => {
  const documentIds = ["programme-index", "programme-accounting"];
  const loginUrl = "https://stmsltd.uk/login.html";

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
