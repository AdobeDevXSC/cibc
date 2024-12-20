# Door Opener Project Boilerplate 

Mockup of CIBC landing page in both English and French to showcase how efficient development in Edge Delivery Services is.

Original Landing Page - EN: https://www.innovationbanking.cibc.com/en/web/guest/home
Original Landing Page - FR: https://www.innovationbanking.cibc.com/fr/web/guest/accueil

## Environments
English (en)
- Preview: https://main--cibc--adobedevxsc.aem.page/en/
- Live: https://main--cibc--adobedevxsc.aem.live/en/
  
French (fr)
- Preview: https://main--cibc--adobedevxsc.aem.page/fr/
- Live: https://main--cibc--adobedevxsc.aem.live/fr/

## Installation

```sh
npm i
```

## Linting

```sh
npm run lint
```

## Local development

<!-- TODO: update with verbiage specific to door-opener template -->
1. Create a new repository based on the `aem-boilerplate` template and add a mountpoint in the `fstab.yaml`
1. Add the [AEM Code Sync GitHub App](https://github.com/apps/aem-code-sync) to the repository
1. Install the [AEM CLI](https://github.com/adobe/helix-cli): `npm install -g @adobe/aem-cli`
1. Start AEM Proxy: `aem up` (opens your browser at `http://localhost:3000`)
1. Open the `{repo}` directory in your favorite IDE and start coding :)
