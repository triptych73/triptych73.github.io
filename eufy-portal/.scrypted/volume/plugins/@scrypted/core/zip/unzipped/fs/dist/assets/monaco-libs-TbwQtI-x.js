function u(a,i,c){function o(t,n,r,p){t.languages.typescript.typescriptDefaults.setDiagnosticsOptions(Object.assign({},t.languages.typescript.typescriptDefaults.getDiagnosticsOptions(),{diagnosticCodesToIgnore:[1108,1375,1378]})),t.languages.typescript.typescriptDefaults.setCompilerOptions(Object.assign({},t.languages.typescript.typescriptDefaults.getCompilerOptions(),{moduleResolution:t.languages.typescript.ModuleResolutionKind.NodeJs}));const s={...r,...p},g=Object.values(s).join(`
`),l=Object.keys(s).map(e=>s[e]).map(e=>e.toString().replace(/export /g,"").replace(/import.*?/g,"")).join(`
`);t.languages.typescript.typescriptDefaults.addExtraLib(`
        ${g}

        declare global {
            ${l}

            const log: Logger;

            const deviceManager: DeviceManager;
            const endpointManager: EndpointManager;
            const mediaManager: MediaManager;
            const systemManager: SystemManager;

            const eventSource: ScryptedDevice;
            const eventDetails: EventDetails;
            const eventData: any;
        }
        `,"node_modules/@types/scrypted__sdk/types/index.d.ts");for(const e of Object.keys(n))t.languages.typescript.typescriptDefaults.addExtraLib(n[e],e)}return`(function() {
    const standardLibs = ${JSON.stringify(a)};
    const scryptedLibs = ${JSON.stringify(i)};
    const extraLibs = ${JSON.stringify(c)};

    return (monaco) => {
        (${o})(monaco, standardLibs, scryptedLibs, extraLibs);
    }
    })();
    `}export{u as createMonacoEvalDefaultsWithLibs};
