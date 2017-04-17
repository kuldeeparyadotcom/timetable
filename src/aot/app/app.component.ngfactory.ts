import * as import0 from '../../app/app.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '../../app/timetable-item/timetable-item.service';
import * as import6 from '../../app/timetable-wish/timetable-wish.service';
import * as import7 from '../../app/timetable-tip/timetable-tip.service';
import * as import8 from '../../app/timetable-auth/timetable-auth.service';
import * as import9 from '@angular/core/src/linker/view_type';
import * as import10 from '@angular/core/src/change_detection/constants';
import * as import11 from '@angular/http/src/http';
import * as import12 from '@angular/router/src/router';
import * as import13 from '@angular/core/src/linker/component_factory';
import * as import14 from '../../app/timetable-header/timetable-header.component';
import * as import15 from './timetable-header/timetable-header.component.ngfactory';
import * as import16 from '@angular/core/src/linker/view_container';
import * as import17 from '../node_modules/@angular/router/src/directives/router_outlet.ngfactory';
import * as import18 from '@angular/router/src/router_outlet_map';
import * as import19 from '@angular/core/src/linker/component_factory_resolver';
import * as import20 from '@angular/router/src/directives/router_outlet';
export class Wrapper_AppComponent {
  /*private*/ _eventHandler:Function;
  context:import0.AppComponent;
  /*private*/ _changed:boolean;
  constructor() {
    this._changed = false;
    this.context = new import0.AppComponent();
  }
  ngOnDetach(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  ngDoCheck(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    return changed;
  }
  checkHost(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import1.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
var renderType_AppComponent_Host:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,([] as any[]),{});
class View_AppComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.AppComponent>;
  _AppComponent_0_3:Wrapper_AppComponent;
  __TimetableItemService_0_4:import5.TimetableItemService;
  __TimetableWishService_0_5:import6.TimetableWishService;
  __TimetableTipService_0_6:import7.TimetableTipService;
  __TimetableAuthService_0_7:import8.TimetableAuthService;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_AppComponent_Host0,renderType_AppComponent_Host,import9.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import10.ChangeDetectorStatus.CheckAlways);
  }
  get _TimetableItemService_0_4():import5.TimetableItemService {
    if ((this.__TimetableItemService_0_4 == null)) { (this.__TimetableItemService_0_4 = new import5.TimetableItemService(this.injectorGet(import11.Http,this.parentIndex))); }
    return this.__TimetableItemService_0_4;
  }
  get _TimetableWishService_0_5():import6.TimetableWishService {
    if ((this.__TimetableWishService_0_5 == null)) { (this.__TimetableWishService_0_5 = new import6.TimetableWishService()); }
    return this.__TimetableWishService_0_5;
  }
  get _TimetableTipService_0_6():import7.TimetableTipService {
    if ((this.__TimetableTipService_0_6 == null)) { (this.__TimetableTipService_0_6 = new import7.TimetableTipService()); }
    return this.__TimetableTipService_0_6;
  }
  get _TimetableAuthService_0_7():import8.TimetableAuthService {
    if ((this.__TimetableAuthService_0_7 == null)) { (this.__TimetableAuthService_0_7 = new import8.TimetableAuthService(this.injectorGet(import11.Http,this.parentIndex),this.injectorGet(import12.Router,this.parentIndex))); }
    return this.__TimetableAuthService_0_7;
  }
  createInternal(rootSelector:string):import13.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'my-app',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_AppComponent0(this.viewUtils,this,0,this._el_0);
    this._AppComponent_0_3 = new Wrapper_AppComponent();
    this.compView_0.create(this._AppComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import13.ComponentRef_<any>(0,this,this._el_0,this._AppComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.AppComponent) && (0 === requestNodeIndex))) { return this._AppComponent_0_3.context; }
    if (((token === import5.TimetableItemService) && (0 === requestNodeIndex))) { return this._TimetableItemService_0_4; }
    if (((token === import6.TimetableWishService) && (0 === requestNodeIndex))) { return this._TimetableWishService_0_5; }
    if (((token === import7.TimetableTipService) && (0 === requestNodeIndex))) { return this._TimetableTipService_0_6; }
    if (((token === import8.TimetableAuthService) && (0 === requestNodeIndex))) { return this._TimetableAuthService_0_7; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._AppComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const AppComponentNgFactory:import13.ComponentFactory<import0.AppComponent> = new import13.ComponentFactory<import0.AppComponent>('my-app',View_AppComponent_Host0,import0.AppComponent);
const styles_AppComponent:any[] = ([] as any[]);
var renderType_AppComponent:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,styles_AppComponent,{});
export class View_AppComponent0 extends import1.AppView<import0.AppComponent> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  compView_2:import1.AppView<import14.TimetableHeaderComponent>;
  _TimetableHeaderComponent_2_3:import15.Wrapper_TimetableHeaderComponent;
  _text_3:any;
  _text_4:any;
  _el_5:any;
  /*private*/ _vc_5:import16.ViewContainer;
  _RouterOutlet_5_5:import17.Wrapper_RouterOutlet;
  _text_6:any;
  _text_7:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_AppComponent0,renderType_AppComponent,import9.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import10.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import13.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._el_0 = import3.createRenderElement(this.renderer,parentRenderNode,'div',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'timetable-header',import3.EMPTY_INLINE_ARRAY,(null as any));
    this.compView_2 = new import15.View_TimetableHeaderComponent0(this.viewUtils,this,2,this._el_2);
    this._TimetableHeaderComponent_2_3 = new import15.Wrapper_TimetableHeaderComponent();
    this.compView_2.create(this._TimetableHeaderComponent_2_3.context);
    this._text_3 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._text_4 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_5 = import3.createRenderElement(this.renderer,this._el_0,'router-outlet',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._vc_5 = new import16.ViewContainer(5,0,this,this._el_5);
    this._RouterOutlet_5_5 = new import17.Wrapper_RouterOutlet(this.parentView.injectorGet(import18.RouterOutletMap,this.parentIndex),this._vc_5.vcRef,this.parentView.injectorGet(import19.ComponentFactoryResolver,this.parentIndex),(null as any));
    this._text_6 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._text_7 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._text_7
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import14.TimetableHeaderComponent) && (2 === requestNodeIndex))) { return this._TimetableHeaderComponent_2_3.context; }
    if (((token === import20.RouterOutlet) && (5 === requestNodeIndex))) { return this._RouterOutlet_5_5.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._TimetableHeaderComponent_2_3.ngDoCheck(this,this._el_2,throwOnChange);
    this._RouterOutlet_5_5.ngDoCheck(this,this._el_5,throwOnChange);
    this._vc_5.detectChangesInNestedViews(throwOnChange);
    this.compView_2.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this._vc_5.destroyNestedViews();
    this.compView_2.destroy();
    this._RouterOutlet_5_5.ngOnDestroy();
  }
}