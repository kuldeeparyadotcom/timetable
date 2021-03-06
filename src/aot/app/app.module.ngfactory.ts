import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from '../../app/app.module';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '@angular/core/src/application_module';
import * as import4 from '@angular/platform-browser/src/browser';
import * as import5 from '@angular/forms/src/directives';
import * as import6 from '@angular/forms/src/form_providers';
import * as import7 from '@angular/router/src/router_module';
import * as import8 from '@angular/http/src/http_module';
import * as import9 from '@angular/common/src/localization';
import * as import10 from '@angular/core/src/application_init';
import * as import11 from '@angular/core/src/testability/testability';
import * as import12 from '@angular/core/src/application_ref';
import * as import13 from '@angular/core/src/linker/compiler';
import * as import14 from '@angular/platform-browser/src/dom/events/hammer_gestures';
import * as import15 from '@angular/platform-browser/src/dom/events/event_manager';
import * as import16 from '@angular/platform-browser/src/dom/shared_styles_host';
import * as import17 from '@angular/platform-browser/src/dom/dom_renderer';
import * as import18 from '@angular/platform-browser/src/security/dom_sanitization_service';
import * as import19 from '@angular/core/src/animation/animation_queue';
import * as import20 from '@angular/core/src/linker/view_utils';
import * as import21 from '@angular/platform-browser/src/browser/title';
import * as import22 from '@angular/forms/src/directives/radio_control_value_accessor';
import * as import23 from '@angular/http/src/backends/browser_xhr';
import * as import24 from '@angular/http/src/base_response_options';
import * as import25 from '@angular/http/src/backends/xhr_backend';
import * as import26 from '@angular/http/src/base_request_options';
import * as import27 from '@angular/common/src/location/location';
import * as import28 from '@angular/router/src/url_tree';
import * as import29 from '@angular/router/src/router_outlet_map';
import * as import30 from '@angular/core/src/linker/system_js_ng_module_factory_loader';
import * as import31 from '@angular/router/src/router_preloader';
import * as import32 from '@angular/core/src/di/injector';
import * as import33 from './timetable-items-tips/timetable-items-tips.component.ngfactory';
import * as import34 from './timetable-wish/timetable-wisheslist.component.ngfactory';
import * as import35 from './timetable-auth/timetable-auth.component.ngfactory';
import * as import36 from './timetable-auth/timetable-signup.component.ngfactory';
import * as import37 from './timetable-auth/timetable-signin.component.ngfactory';
import * as import38 from './timetable-auth/timetable-logout.component.ngfactory';
import * as import39 from './app.component.ngfactory';
import * as import40 from '@angular/core/src/i18n/tokens';
import * as import41 from '@angular/core/src/application_tokens';
import * as import42 from '@angular/platform-browser/src/dom/events/dom_events';
import * as import43 from '@angular/platform-browser/src/dom/events/key_events';
import * as import44 from '@angular/core/src/zone/ng_zone';
import * as import45 from '@angular/platform-browser/src/dom/debug/ng_probe';
import * as import46 from '@angular/common/src/location/platform_location';
import * as import47 from '@angular/common/src/location/location_strategy';
import * as import48 from '../../app/timetable-items-tips/timetable-items-tips.component';
import * as import49 from '../../app/timetable-wish/timetable-wisheslist.component';
import * as import50 from '../../app/timetable-auth/timetable-auth.component';
import * as import51 from '../../app/timetable-auth/timetable-signup.component';
import * as import52 from '../../app/timetable-auth/timetable-signin.component';
import * as import53 from '../../app/timetable-auth/timetable-logout.component';
import * as import54 from '@angular/router/src/url_handling_strategy';
import * as import55 from '@angular/router/src/route_reuse_strategy';
import * as import56 from '@angular/router/src/router';
import * as import57 from '@angular/core/src/console';
import * as import58 from '@angular/core/src/error_handler';
import * as import59 from '@angular/platform-browser/src/dom/dom_tokens';
import * as import60 from '@angular/platform-browser/src/dom/animation_driver';
import * as import61 from '@angular/core/src/render/api';
import * as import62 from '@angular/core/src/security';
import * as import63 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import64 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import65 from '@angular/http/src/interfaces';
import * as import66 from '@angular/http/src/http';
import * as import67 from '@angular/core/src/linker/ng_module_factory_loader';
import * as import68 from '@angular/router/src/router_config_loader';
import * as import69 from '@angular/router/src/router_state';
class AppModuleInjector extends import0.NgModuleInjector<import1.AppModule> {
  _CommonModule_0:import2.CommonModule;
  _ApplicationModule_1:import3.ApplicationModule;
  _BrowserModule_2:import4.BrowserModule;
  _InternalFormsSharedModule_3:import5.InternalFormsSharedModule;
  _FormsModule_4:import6.FormsModule;
  _ROUTER_FORROOT_GUARD_5:any;
  _RouterModule_6:import7.RouterModule;
  _HttpModule_7:import8.HttpModule;
  _AppModule_8:import1.AppModule;
  __LOCALE_ID_9:any;
  __NgLocalization_10:import9.NgLocaleLocalization;
  _ErrorHandler_11:any;
  _RouterInitializer_12:import7.RouterInitializer;
  _APP_INITIALIZER_13:any[];
  _ApplicationInitStatus_14:import10.ApplicationInitStatus;
  _Testability_15:import11.Testability;
  _ApplicationRef__16:import12.ApplicationRef_;
  __ApplicationRef_17:any;
  __Compiler_18:import13.Compiler;
  __APP_ID_19:any;
  __DOCUMENT_20:any;
  __HAMMER_GESTURE_CONFIG_21:import14.HammerGestureConfig;
  __EVENT_MANAGER_PLUGINS_22:any[];
  __EventManager_23:import15.EventManager;
  _DomSharedStylesHost_24:import16.DomSharedStylesHost;
  __AnimationDriver_25:any;
  __DomRootRenderer_26:import17.DomRootRenderer_;
  __NgProbeToken_27:any[];
  __RootRenderer_28:any;
  __DomSanitizer_29:import18.DomSanitizerImpl;
  __Sanitizer_30:any;
  __AnimationQueue_31:import19.AnimationQueue;
  __ViewUtils_32:import20.ViewUtils;
  __IterableDiffers_33:any;
  __KeyValueDiffers_34:any;
  __SharedStylesHost_35:any;
  __Title_36:import21.Title;
  __RadioControlRegistry_37:import22.RadioControlRegistry;
  __BrowserXhr_38:import23.BrowserXhr;
  __ResponseOptions_39:import24.BaseResponseOptions;
  __XSRFStrategy_40:any;
  __XHRBackend_41:import25.XHRBackend;
  __RequestOptions_42:import26.BaseRequestOptions;
  __Http_43:any;
  __ROUTER_CONFIGURATION_44:any;
  __LocationStrategy_45:any;
  __Location_46:import27.Location;
  __UrlSerializer_47:import28.DefaultUrlSerializer;
  __RouterOutletMap_48:import29.RouterOutletMap;
  __NgModuleFactoryLoader_49:import30.SystemJsNgModuleLoader;
  __ROUTES_50:any[];
  __Router_51:any;
  __ActivatedRoute_52:any;
  _NoPreloading_53:import31.NoPreloading;
  _PreloadingStrategy_54:any;
  _RouterPreloader_55:import31.RouterPreloader;
  __PreloadAllModules_56:import31.PreloadAllModules;
  __ROUTER_INITIALIZER_57:any;
  __APP_BOOTSTRAP_LISTENER_58:any[];
  constructor(parent:import32.Injector) {
    super(parent,[
      import33.TimetableItemsTipsComponentNgFactory,
      import34.TimetableWisheslistComponentNgFactory,
      import35.TimetableAuthComponentNgFactory,
      import36.TimetableSignupComponentNgFactory,
      import37.TimetableSigninComponentNgFactory,
      import38.TimetableLogoutComponentNgFactory,
      import39.AppComponentNgFactory
    ]
    ,[import39.AppComponentNgFactory]);
  }
  get _LOCALE_ID_9():any {
    if ((this.__LOCALE_ID_9 == null)) { (this.__LOCALE_ID_9 = import3._localeFactory(this.parent.get(import40.LOCALE_ID,(null as any)))); }
    return this.__LOCALE_ID_9;
  }
  get _NgLocalization_10():import9.NgLocaleLocalization {
    if ((this.__NgLocalization_10 == null)) { (this.__NgLocalization_10 = new import9.NgLocaleLocalization(this._LOCALE_ID_9)); }
    return this.__NgLocalization_10;
  }
  get _ApplicationRef_17():any {
    if ((this.__ApplicationRef_17 == null)) { (this.__ApplicationRef_17 = this._ApplicationRef__16); }
    return this.__ApplicationRef_17;
  }
  get _Compiler_18():import13.Compiler {
    if ((this.__Compiler_18 == null)) { (this.__Compiler_18 = new import13.Compiler()); }
    return this.__Compiler_18;
  }
  get _APP_ID_19():any {
    if ((this.__APP_ID_19 == null)) { (this.__APP_ID_19 = import41._appIdRandomProviderFactory()); }
    return this.__APP_ID_19;
  }
  get _DOCUMENT_20():any {
    if ((this.__DOCUMENT_20 == null)) { (this.__DOCUMENT_20 = import4._document()); }
    return this.__DOCUMENT_20;
  }
  get _HAMMER_GESTURE_CONFIG_21():import14.HammerGestureConfig {
    if ((this.__HAMMER_GESTURE_CONFIG_21 == null)) { (this.__HAMMER_GESTURE_CONFIG_21 = new import14.HammerGestureConfig()); }
    return this.__HAMMER_GESTURE_CONFIG_21;
  }
  get _EVENT_MANAGER_PLUGINS_22():any[] {
    if ((this.__EVENT_MANAGER_PLUGINS_22 == null)) { (this.__EVENT_MANAGER_PLUGINS_22 = [
      new import42.DomEventsPlugin(),
      new import43.KeyEventsPlugin(),
      new import14.HammerGesturesPlugin(this._HAMMER_GESTURE_CONFIG_21)
    ]
    ); }
    return this.__EVENT_MANAGER_PLUGINS_22;
  }
  get _EventManager_23():import15.EventManager {
    if ((this.__EventManager_23 == null)) { (this.__EventManager_23 = new import15.EventManager(this._EVENT_MANAGER_PLUGINS_22,this.parent.get(import44.NgZone))); }
    return this.__EventManager_23;
  }
  get _AnimationDriver_25():any {
    if ((this.__AnimationDriver_25 == null)) { (this.__AnimationDriver_25 = import4._resolveDefaultAnimationDriver()); }
    return this.__AnimationDriver_25;
  }
  get _DomRootRenderer_26():import17.DomRootRenderer_ {
    if ((this.__DomRootRenderer_26 == null)) { (this.__DomRootRenderer_26 = new import17.DomRootRenderer_(this._DOCUMENT_20,this._EventManager_23,this._DomSharedStylesHost_24,this._AnimationDriver_25,this._APP_ID_19)); }
    return this.__DomRootRenderer_26;
  }
  get _NgProbeToken_27():any[] {
    if ((this.__NgProbeToken_27 == null)) { (this.__NgProbeToken_27 = [import7.routerNgProbeToken()]); }
    return this.__NgProbeToken_27;
  }
  get _RootRenderer_28():any {
    if ((this.__RootRenderer_28 == null)) { (this.__RootRenderer_28 = import45._createConditionalRootRenderer(this._DomRootRenderer_26,this.parent.get(import45.NgProbeToken,(null as any)),this._NgProbeToken_27)); }
    return this.__RootRenderer_28;
  }
  get _DomSanitizer_29():import18.DomSanitizerImpl {
    if ((this.__DomSanitizer_29 == null)) { (this.__DomSanitizer_29 = new import18.DomSanitizerImpl()); }
    return this.__DomSanitizer_29;
  }
  get _Sanitizer_30():any {
    if ((this.__Sanitizer_30 == null)) { (this.__Sanitizer_30 = this._DomSanitizer_29); }
    return this.__Sanitizer_30;
  }
  get _AnimationQueue_31():import19.AnimationQueue {
    if ((this.__AnimationQueue_31 == null)) { (this.__AnimationQueue_31 = new import19.AnimationQueue(this.parent.get(import44.NgZone))); }
    return this.__AnimationQueue_31;
  }
  get _ViewUtils_32():import20.ViewUtils {
    if ((this.__ViewUtils_32 == null)) { (this.__ViewUtils_32 = new import20.ViewUtils(this._RootRenderer_28,this._Sanitizer_30,this._AnimationQueue_31)); }
    return this.__ViewUtils_32;
  }
  get _IterableDiffers_33():any {
    if ((this.__IterableDiffers_33 == null)) { (this.__IterableDiffers_33 = import3._iterableDiffersFactory()); }
    return this.__IterableDiffers_33;
  }
  get _KeyValueDiffers_34():any {
    if ((this.__KeyValueDiffers_34 == null)) { (this.__KeyValueDiffers_34 = import3._keyValueDiffersFactory()); }
    return this.__KeyValueDiffers_34;
  }
  get _SharedStylesHost_35():any {
    if ((this.__SharedStylesHost_35 == null)) { (this.__SharedStylesHost_35 = this._DomSharedStylesHost_24); }
    return this.__SharedStylesHost_35;
  }
  get _Title_36():import21.Title {
    if ((this.__Title_36 == null)) { (this.__Title_36 = new import21.Title()); }
    return this.__Title_36;
  }
  get _RadioControlRegistry_37():import22.RadioControlRegistry {
    if ((this.__RadioControlRegistry_37 == null)) { (this.__RadioControlRegistry_37 = new import22.RadioControlRegistry()); }
    return this.__RadioControlRegistry_37;
  }
  get _BrowserXhr_38():import23.BrowserXhr {
    if ((this.__BrowserXhr_38 == null)) { (this.__BrowserXhr_38 = new import23.BrowserXhr()); }
    return this.__BrowserXhr_38;
  }
  get _ResponseOptions_39():import24.BaseResponseOptions {
    if ((this.__ResponseOptions_39 == null)) { (this.__ResponseOptions_39 = new import24.BaseResponseOptions()); }
    return this.__ResponseOptions_39;
  }
  get _XSRFStrategy_40():any {
    if ((this.__XSRFStrategy_40 == null)) { (this.__XSRFStrategy_40 = import8._createDefaultCookieXSRFStrategy()); }
    return this.__XSRFStrategy_40;
  }
  get _XHRBackend_41():import25.XHRBackend {
    if ((this.__XHRBackend_41 == null)) { (this.__XHRBackend_41 = new import25.XHRBackend(this._BrowserXhr_38,this._ResponseOptions_39,this._XSRFStrategy_40)); }
    return this.__XHRBackend_41;
  }
  get _RequestOptions_42():import26.BaseRequestOptions {
    if ((this.__RequestOptions_42 == null)) { (this.__RequestOptions_42 = new import26.BaseRequestOptions()); }
    return this.__RequestOptions_42;
  }
  get _Http_43():any {
    if ((this.__Http_43 == null)) { (this.__Http_43 = import8.httpFactory(this._XHRBackend_41,this._RequestOptions_42)); }
    return this.__Http_43;
  }
  get _ROUTER_CONFIGURATION_44():any {
    if ((this.__ROUTER_CONFIGURATION_44 == null)) { (this.__ROUTER_CONFIGURATION_44 = {}); }
    return this.__ROUTER_CONFIGURATION_44;
  }
  get _LocationStrategy_45():any {
    if ((this.__LocationStrategy_45 == null)) { (this.__LocationStrategy_45 = import7.provideLocationStrategy(this.parent.get(import46.PlatformLocation),this.parent.get(import47.APP_BASE_HREF,(null as any)),this._ROUTER_CONFIGURATION_44)); }
    return this.__LocationStrategy_45;
  }
  get _Location_46():import27.Location {
    if ((this.__Location_46 == null)) { (this.__Location_46 = new import27.Location(this._LocationStrategy_45)); }
    return this.__Location_46;
  }
  get _UrlSerializer_47():import28.DefaultUrlSerializer {
    if ((this.__UrlSerializer_47 == null)) { (this.__UrlSerializer_47 = new import28.DefaultUrlSerializer()); }
    return this.__UrlSerializer_47;
  }
  get _RouterOutletMap_48():import29.RouterOutletMap {
    if ((this.__RouterOutletMap_48 == null)) { (this.__RouterOutletMap_48 = new import29.RouterOutletMap()); }
    return this.__RouterOutletMap_48;
  }
  get _NgModuleFactoryLoader_49():import30.SystemJsNgModuleLoader {
    if ((this.__NgModuleFactoryLoader_49 == null)) { (this.__NgModuleFactoryLoader_49 = new import30.SystemJsNgModuleLoader(this._Compiler_18,this.parent.get(import30.SystemJsNgModuleLoaderConfig,(null as any)))); }
    return this.__NgModuleFactoryLoader_49;
  }
  get _ROUTES_50():any[] {
      if ((this.__ROUTES_50 == null)) { (this.__ROUTES_50 = [[
        {
          path: '',
          redirectTo: '/auth/signin',
          pathMatch: 'full'
        }
        ,
        {
          path: 'timetable',
          component: import48.TimetableItemsTipsComponent
        }
        ,
        {
          path: 'wishes',
          component: import49.TimetableWisheslistComponent
        }
        ,
        {
          path: 'auth',
          component: import50.TimetableAuthComponent,
          children: [
            {
              path: '',
              redirectTo: 'signup',
              pathMatch: 'full'
            }
            ,
            {
              path: 'signup',
              component: import51.TimetableSignupComponent
            }
            ,
            {
              path: 'signin',
              component: import52.TimetableSigninComponent
            }
            ,
            {
              path: 'logout',
              component: import53.TimetableLogoutComponent
            }

          ]

        }

      ]
    ]); }
    return this.__ROUTES_50;
  }
  get _Router_51():any {
    if ((this.__Router_51 == null)) { (this.__Router_51 = import7.setupRouter(this._ApplicationRef_17,this._UrlSerializer_47,this._RouterOutletMap_48,this._Location_46,this,this._NgModuleFactoryLoader_49,this._Compiler_18,this._ROUTES_50,this._ROUTER_CONFIGURATION_44,this.parent.get(import54.UrlHandlingStrategy,(null as any)),this.parent.get(import55.RouteReuseStrategy,(null as any)))); }
    return this.__Router_51;
  }
  get _ActivatedRoute_52():any {
    if ((this.__ActivatedRoute_52 == null)) { (this.__ActivatedRoute_52 = import7.rootRoute(this._Router_51)); }
    return this.__ActivatedRoute_52;
  }
  get _PreloadAllModules_56():import31.PreloadAllModules {
    if ((this.__PreloadAllModules_56 == null)) { (this.__PreloadAllModules_56 = new import31.PreloadAllModules()); }
    return this.__PreloadAllModules_56;
  }
  get _ROUTER_INITIALIZER_57():any {
    if ((this.__ROUTER_INITIALIZER_57 == null)) { (this.__ROUTER_INITIALIZER_57 = import7.getBootstrapListener(this._RouterInitializer_12)); }
    return this.__ROUTER_INITIALIZER_57;
  }
  get _APP_BOOTSTRAP_LISTENER_58():any[] {
    if ((this.__APP_BOOTSTRAP_LISTENER_58 == null)) { (this.__APP_BOOTSTRAP_LISTENER_58 = [this._ROUTER_INITIALIZER_57]); }
    return this.__APP_BOOTSTRAP_LISTENER_58;
  }
  createInternal():import1.AppModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._ApplicationModule_1 = new import3.ApplicationModule();
    this._BrowserModule_2 = new import4.BrowserModule(this.parent.get(import4.BrowserModule,(null as any)));
    this._InternalFormsSharedModule_3 = new import5.InternalFormsSharedModule();
    this._FormsModule_4 = new import6.FormsModule();
    this._ROUTER_FORROOT_GUARD_5 = import7.provideForRootGuard(this.parent.get(import56.Router,(null as any)));
    this._RouterModule_6 = new import7.RouterModule(this._ROUTER_FORROOT_GUARD_5);
    this._HttpModule_7 = new import8.HttpModule();
    this._AppModule_8 = new import1.AppModule();
    this._ErrorHandler_11 = import4.errorHandler();
    this._RouterInitializer_12 = new import7.RouterInitializer(this);
    this._APP_INITIALIZER_13 = [import7.getAppInitializer(this._RouterInitializer_12)];
    this._ApplicationInitStatus_14 = new import10.ApplicationInitStatus(this._APP_INITIALIZER_13);
    this._Testability_15 = new import11.Testability(this.parent.get(import44.NgZone));
    this._ApplicationRef__16 = new import12.ApplicationRef_(this.parent.get(import44.NgZone),this.parent.get(import57.Console),this,this._ErrorHandler_11,this,this._ApplicationInitStatus_14,this.parent.get(import11.TestabilityRegistry,(null as any)),this._Testability_15);
    this._DomSharedStylesHost_24 = new import16.DomSharedStylesHost(this._DOCUMENT_20);
    this._NoPreloading_53 = new import31.NoPreloading();
    this._PreloadingStrategy_54 = this._NoPreloading_53;
    this._RouterPreloader_55 = new import31.RouterPreloader(this._Router_51,this._NgModuleFactoryLoader_49,this._Compiler_18,this,this._PreloadingStrategy_54);
    return this._AppModule_8;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import3.ApplicationModule)) { return this._ApplicationModule_1; }
    if ((token === import4.BrowserModule)) { return this._BrowserModule_2; }
    if ((token === import5.InternalFormsSharedModule)) { return this._InternalFormsSharedModule_3; }
    if ((token === import6.FormsModule)) { return this._FormsModule_4; }
    if ((token === import7.ROUTER_FORROOT_GUARD)) { return this._ROUTER_FORROOT_GUARD_5; }
    if ((token === import7.RouterModule)) { return this._RouterModule_6; }
    if ((token === import8.HttpModule)) { return this._HttpModule_7; }
    if ((token === import1.AppModule)) { return this._AppModule_8; }
    if ((token === import40.LOCALE_ID)) { return this._LOCALE_ID_9; }
    if ((token === import9.NgLocalization)) { return this._NgLocalization_10; }
    if ((token === import58.ErrorHandler)) { return this._ErrorHandler_11; }
    if ((token === import7.RouterInitializer)) { return this._RouterInitializer_12; }
    if ((token === import10.APP_INITIALIZER)) { return this._APP_INITIALIZER_13; }
    if ((token === import10.ApplicationInitStatus)) { return this._ApplicationInitStatus_14; }
    if ((token === import11.Testability)) { return this._Testability_15; }
    if ((token === import12.ApplicationRef_)) { return this._ApplicationRef__16; }
    if ((token === import12.ApplicationRef)) { return this._ApplicationRef_17; }
    if ((token === import13.Compiler)) { return this._Compiler_18; }
    if ((token === import41.APP_ID)) { return this._APP_ID_19; }
    if ((token === import59.DOCUMENT)) { return this._DOCUMENT_20; }
    if ((token === import14.HAMMER_GESTURE_CONFIG)) { return this._HAMMER_GESTURE_CONFIG_21; }
    if ((token === import15.EVENT_MANAGER_PLUGINS)) { return this._EVENT_MANAGER_PLUGINS_22; }
    if ((token === import15.EventManager)) { return this._EventManager_23; }
    if ((token === import16.DomSharedStylesHost)) { return this._DomSharedStylesHost_24; }
    if ((token === import60.AnimationDriver)) { return this._AnimationDriver_25; }
    if ((token === import17.DomRootRenderer)) { return this._DomRootRenderer_26; }
    if ((token === import12.NgProbeToken)) { return this._NgProbeToken_27; }
    if ((token === import61.RootRenderer)) { return this._RootRenderer_28; }
    if ((token === import18.DomSanitizer)) { return this._DomSanitizer_29; }
    if ((token === import62.Sanitizer)) { return this._Sanitizer_30; }
    if ((token === import19.AnimationQueue)) { return this._AnimationQueue_31; }
    if ((token === import20.ViewUtils)) { return this._ViewUtils_32; }
    if ((token === import63.IterableDiffers)) { return this._IterableDiffers_33; }
    if ((token === import64.KeyValueDiffers)) { return this._KeyValueDiffers_34; }
    if ((token === import16.SharedStylesHost)) { return this._SharedStylesHost_35; }
    if ((token === import21.Title)) { return this._Title_36; }
    if ((token === import22.RadioControlRegistry)) { return this._RadioControlRegistry_37; }
    if ((token === import23.BrowserXhr)) { return this._BrowserXhr_38; }
    if ((token === import24.ResponseOptions)) { return this._ResponseOptions_39; }
    if ((token === import65.XSRFStrategy)) { return this._XSRFStrategy_40; }
    if ((token === import25.XHRBackend)) { return this._XHRBackend_41; }
    if ((token === import26.RequestOptions)) { return this._RequestOptions_42; }
    if ((token === import66.Http)) { return this._Http_43; }
    if ((token === import7.ROUTER_CONFIGURATION)) { return this._ROUTER_CONFIGURATION_44; }
    if ((token === import47.LocationStrategy)) { return this._LocationStrategy_45; }
    if ((token === import27.Location)) { return this._Location_46; }
    if ((token === import28.UrlSerializer)) { return this._UrlSerializer_47; }
    if ((token === import29.RouterOutletMap)) { return this._RouterOutletMap_48; }
    if ((token === import67.NgModuleFactoryLoader)) { return this._NgModuleFactoryLoader_49; }
    if ((token === import68.ROUTES)) { return this._ROUTES_50; }
    if ((token === import56.Router)) { return this._Router_51; }
    if ((token === import69.ActivatedRoute)) { return this._ActivatedRoute_52; }
    if ((token === import31.NoPreloading)) { return this._NoPreloading_53; }
    if ((token === import31.PreloadingStrategy)) { return this._PreloadingStrategy_54; }
    if ((token === import31.RouterPreloader)) { return this._RouterPreloader_55; }
    if ((token === import31.PreloadAllModules)) { return this._PreloadAllModules_56; }
    if ((token === import7.ROUTER_INITIALIZER)) { return this._ROUTER_INITIALIZER_57; }
    if ((token === import41.APP_BOOTSTRAP_LISTENER)) { return this._APP_BOOTSTRAP_LISTENER_58; }
    return notFoundResult;
  }
  destroyInternal():void {
    this._ApplicationRef__16.ngOnDestroy();
    this._DomSharedStylesHost_24.ngOnDestroy();
    this._RouterPreloader_55.ngOnDestroy();
  }
}
export const AppModuleNgFactory:import0.NgModuleFactory<import1.AppModule> = new import0.NgModuleFactory(AppModuleInjector,import1.AppModule);