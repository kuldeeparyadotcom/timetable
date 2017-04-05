import * as import0 from '../../app/app.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '../../app/timetable-item/timetable-item.service';
import * as import6 from '../../app/timetable-wish/timetable-wish.service';
import * as import7 from '../../app/timetable-tip/timetable-tip.service';
import * as import8 from '@angular/core/src/linker/view_type';
import * as import9 from '@angular/core/src/change_detection/constants';
import * as import10 from '@angular/http/src/http';
import * as import11 from '@angular/core/src/linker/component_factory';
import * as import12 from '../../app/timetable-header/timetable-header.component';
import * as import13 from './timetable-header/timetable-header.component.ngfactory';
import * as import14 from '../../app/timetable-title/timetable-title.component';
import * as import15 from './timetable-title/timetable-title.component.ngfactory';
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
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_AppComponent_Host0,renderType_AppComponent_Host,import8.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import9.ChangeDetectorStatus.CheckAlways);
  }
  get _TimetableItemService_0_4():import5.TimetableItemService {
    if ((this.__TimetableItemService_0_4 == null)) { (this.__TimetableItemService_0_4 = new import5.TimetableItemService(this.injectorGet(import10.Http,this.parentIndex))); }
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
  createInternal(rootSelector:string):import11.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'my-app',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_AppComponent0(this.viewUtils,this,0,this._el_0);
    this._AppComponent_0_3 = new Wrapper_AppComponent();
    this.compView_0.create(this._AppComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import11.ComponentRef_<any>(0,this,this._el_0,this._AppComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.AppComponent) && (0 === requestNodeIndex))) { return this._AppComponent_0_3.context; }
    if (((token === import5.TimetableItemService) && (0 === requestNodeIndex))) { return this._TimetableItemService_0_4; }
    if (((token === import6.TimetableWishService) && (0 === requestNodeIndex))) { return this._TimetableWishService_0_5; }
    if (((token === import7.TimetableTipService) && (0 === requestNodeIndex))) { return this._TimetableTipService_0_6; }
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
export const AppComponentNgFactory:import11.ComponentFactory<import0.AppComponent> = new import11.ComponentFactory<import0.AppComponent>('my-app',View_AppComponent_Host0,import0.AppComponent);
const styles_AppComponent:any[] = ([] as any[]);
var renderType_AppComponent:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,styles_AppComponent,{});
export class View_AppComponent0 extends import1.AppView<import0.AppComponent> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _el_3:any;
  compView_3:import1.AppView<import12.TimetableHeaderComponent>;
  _TimetableHeaderComponent_3_3:import13.Wrapper_TimetableHeaderComponent;
  _text_4:any;
  _el_5:any;
  compView_5:import1.AppView<import14.TimetableTitleComponent>;
  _TimetableTitleComponent_5_3:import15.Wrapper_TimetableTitleComponent;
  _text_6:any;
  _el_7:any;
  /*private*/ _vc_7:import16.ViewContainer;
  _RouterOutlet_7_5:import17.Wrapper_RouterOutlet;
  _text_8:any;
  _text_9:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_AppComponent0,renderType_AppComponent,import8.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import9.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import11.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._el_1 = import3.createRenderElement(this.renderer,parentRenderNode,'div',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_2 = this.renderer.createText(this._el_1,'\n    ',(null as any));
    this._el_3 = import3.createRenderElement(this.renderer,this._el_1,'timetable-header',import3.EMPTY_INLINE_ARRAY,(null as any));
    this.compView_3 = new import13.View_TimetableHeaderComponent0(this.viewUtils,this,3,this._el_3);
    this._TimetableHeaderComponent_3_3 = new import13.Wrapper_TimetableHeaderComponent();
    this.compView_3.create(this._TimetableHeaderComponent_3_3.context);
    this._text_4 = this.renderer.createText(this._el_1,'\n    ',(null as any));
    this._el_5 = import3.createRenderElement(this.renderer,this._el_1,'timetable-title',import3.EMPTY_INLINE_ARRAY,(null as any));
    this.compView_5 = new import15.View_TimetableTitleComponent0(this.viewUtils,this,5,this._el_5);
    this._TimetableTitleComponent_5_3 = new import15.Wrapper_TimetableTitleComponent();
    this.compView_5.create(this._TimetableTitleComponent_5_3.context);
    this._text_6 = this.renderer.createText(this._el_1,'\n\n    ',(null as any));
    this._el_7 = import3.createRenderElement(this.renderer,this._el_1,'router-outlet',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._vc_7 = new import16.ViewContainer(7,1,this,this._el_7);
    this._RouterOutlet_7_5 = new import17.Wrapper_RouterOutlet(this.parentView.injectorGet(import18.RouterOutletMap,this.parentIndex),this._vc_7.vcRef,this.parentView.injectorGet(import19.ComponentFactoryResolver,this.parentIndex),(null as any));
    this._text_8 = this.renderer.createText(this._el_1,'\n\n',(null as any));
    this._text_9 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._el_7,
      this._text_8,
      this._text_9
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import12.TimetableHeaderComponent) && (3 === requestNodeIndex))) { return this._TimetableHeaderComponent_3_3.context; }
    if (((token === import14.TimetableTitleComponent) && (5 === requestNodeIndex))) { return this._TimetableTitleComponent_5_3.context; }
    if (((token === import20.RouterOutlet) && (7 === requestNodeIndex))) { return this._RouterOutlet_7_5.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._TimetableHeaderComponent_3_3.ngDoCheck(this,this._el_3,throwOnChange);
    this._TimetableTitleComponent_5_3.ngDoCheck(this,this._el_5,throwOnChange);
    this._RouterOutlet_7_5.ngDoCheck(this,this._el_7,throwOnChange);
    this._vc_7.detectChangesInNestedViews(throwOnChange);
    this.compView_3.internalDetectChanges(throwOnChange);
    this.compView_5.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this._vc_7.destroyNestedViews();
    this.compView_3.destroy();
    this.compView_5.destroy();
    this._RouterOutlet_7_5.ngOnDestroy();
  }
}