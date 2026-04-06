import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
<<<<<<< HEAD
import { provideHttpClient } from '@angular/common/http';
=======
>>>>>>> 86f023a76ff488390a398c9f923849d2f9312ec8

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
<<<<<<< HEAD
    provideRouter(routes),
    provideHttpClient()
  ]
};
=======
    provideRouter(routes)
  ]
};

>>>>>>> 86f023a76ff488390a398c9f923849d2f9312ec8
