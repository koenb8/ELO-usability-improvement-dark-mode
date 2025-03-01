export class GlobalRepository {
  private static instance: GlobalRepository;
  private rootElement: string;

  private constructor(rootElement: string) {
    this.rootElement = rootElement;
  }

  public static getInstance() {
    if (this.instance === null || this.instance === undefined) {
      this.instance = new GlobalRepository("");
    }

    return this.instance;
  }

  // This is the main menu bar
  public async getMenuBar(): Promise<Element> {
    // try every 10 ms to find this element and return a promise when it is found
    let tries = 0;
    return new Promise((resolve, reject) => {
      const interval = setInterval(() => {
        tries++;

        const menuBar = document.getElementsByClassName(
          "d2l-branding-navigation-background-color d2l-visible-on-ancestor-target"
        )[0];

        if (menuBar) {
          clearInterval(interval);
          resolve(menuBar);
        }
        if (tries > 1000) {
          clearInterval(interval);
          reject();
        }
      }, 10);
    });
  }

  // get the d2l-navigation-main-header
  public async getNavigation(): Promise<Element> {
    let tries = 0;
    return new Promise((resolve, reject) => {
      const interval = setInterval(() => {
        tries++;

        //d2l-navigation-main-header querySelector
        const navigation = document.querySelector("d2l-navigation-main-header");

        if (navigation?.shadowRoot) {
          clearInterval(interval);
          resolve(navigation);
        }
        if (tries > 1000) {
          clearInterval(interval);
          reject();
        }
      }, 10);
    });
  }

  // // Get the d2l-navigation-header-right
  public async getNavigationRight(): Promise<Element> {
    return this.waitForElement(() => {
      return document.querySelector("div.d2l-navigation-header-right");
    });
  }

  // Get the header img
  public async getHeaderImg(): Promise<HTMLImageElement> {
    let tries = 0;
    return new Promise((resolve, reject) => {
      const interval = setInterval(() => {
        tries++;

        const headerImg = document.querySelector("d2l-navigation-link-image");
        const shadowRoot = headerImg?.shadowRoot?.children[0];
        const imgWrapper = shadowRoot?.children[1];
        const img = imgWrapper?.children[0] as HTMLImageElement;

        if (img) {
          clearInterval(interval);
          resolve(img);
        }
        if (tries > 1000) {
          clearInterval(interval);
          reject();
        }
      }, 10);
    });
  }

  // Get other elements
  public async waitForElement(check: () => Element | null | undefined): Promise<Element> {
    let tries = 0;
    return new Promise((resolve, reject) => {
      const interval = setInterval(() => {
        tries++;

        if (check()) {
          clearInterval(interval);
          resolve(check() as Element);
        }
        if (tries > 1000) {
          clearInterval(interval);
          reject();
        }
      }, 0.1);
    });
  }

  // For each shadow root. Either immediately or as they appear.
  public forEachShadowRoot(callbackfn: (value: ShadowRoot) => void) {

    this._forEachUnderlyingShadowRoot(document.documentElement, callbackfn);

  }

  private _forEachUnderlyingShadowRoot(root: Element | ShadowRoot, callbackfn: (value: ShadowRoot) => void) {
    
    const rootMutationObserver = new MutationObserver((mutations: MutationRecord[], observer: MutationObserver) => {
      for (const mutation of mutations) {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach(n => {
            if (n.nodeType == n.ELEMENT_NODE) {
              const e = <Element> n
              const shadowRoot = e.shadowRoot;
              if(shadowRoot) {
                callbackfn(shadowRoot);
                this._forEachUnderlyingShadowRoot(shadowRoot, callbackfn);
                rootMutationObserver.observe(root, {
                  childList: true,
                  subtree: true
                });
              }
              this._forEachUnderlyingShadowRoot(e, callbackfn);
            }
          });
        }
      }
    });

    rootMutationObserver.observe(root, {
      childList: true,
      subtree: true
    });

    var allNodes = root.querySelectorAll('*');
    for (var i = 0; i < allNodes.length; i++) {
      const child = allNodes[i];
      const shadowRoot = child.shadowRoot;
      if(shadowRoot) {
        callbackfn(shadowRoot);
        this._forEachUnderlyingShadowRoot(shadowRoot, callbackfn);
      }
    }

  }
}
