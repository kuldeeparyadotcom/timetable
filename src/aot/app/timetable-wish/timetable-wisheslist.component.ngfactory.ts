import * as import0 from '../../../app/timetable-wish/timetable-wisheslist.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../../app/timetable-wish/timetable-wish.service';
import * as import9 from '../../../app/timetable-wish/timetable-wish.component';
import * as import10 from './timetable-wish.component.ngfactory';
import * as import11 from '@angular/core/src/linker/view_container';
import * as import12 from '../../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import13 from '../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import14 from '@angular/router/src/router';
import * as import15 from '@angular/router/src/router_state';
import * as import16 from '@angular/common/src/location/location_strategy';
import * as import17 from '@angular/core/src/linker/template_ref';
import * as import18 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import19 from '@angular/router/src/directives/router_link';
import * as import20 from '@angular/common/src/directives/ng_for';
export class Wrapper_TimetableWisheslistComponent {
  /*private*/ _eventHandler:Function;
  context:import0.TimetableWisheslistComponent;
  /*private*/ _changed:boolean;
  constructor(p0:any) {
    this._changed = false;
    this.context = new import0.TimetableWisheslistComponent(p0);
  }
  ngOnDetach(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  ngDoCheck(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    if (!throwOnChange) { if ((view.numberOfChecks === 0)) { this.context.ngOnInit(); } }
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
var renderType_TimetableWisheslistComponent_Host:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,([] as any[]),{});
class View_TimetableWisheslistComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.TimetableWisheslistComponent>;
  _TimetableWisheslistComponent_0_3:Wrapper_TimetableWisheslistComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_TimetableWisheslistComponent_Host0,renderType_TimetableWisheslistComponent_Host,import5.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'timetable-wisheslist',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_TimetableWisheslistComponent0(this.viewUtils,this,0,this._el_0);
    this._TimetableWisheslistComponent_0_3 = new Wrapper_TimetableWisheslistComponent(this.injectorGet(import8.TimetableWishService,this.parentIndex));
    this.compView_0.create(this._TimetableWisheslistComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._TimetableWisheslistComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.TimetableWisheslistComponent) && (0 === requestNodeIndex))) { return this._TimetableWisheslistComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._TimetableWisheslistComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const TimetableWisheslistComponentNgFactory:import7.ComponentFactory<import0.TimetableWisheslistComponent> = new import7.ComponentFactory<import0.TimetableWisheslistComponent>('timetable-wisheslist',View_TimetableWisheslistComponent_Host0,import0.TimetableWisheslistComponent);
const styles_TimetableWisheslistComponent:any[] = ([] as any[]);
class View_TimetableWisheslistComponent1 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import9.TimetableWishComponent>;
  _TimetableWishComponent_0_3:import10.Wrapper_TimetableWishComponent;
  _text_1:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import11.ViewContainer) {
    super(View_TimetableWisheslistComponent1,renderType_TimetableWisheslistComponent,import5.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'timetable-wish',import3.EMPTY_INLINE_ARRAY,(null as any));
    this.compView_0 = new import10.View_TimetableWishComponent0(this.viewUtils,this,0,this._el_0);
    this._TimetableWishComponent_0_3 = new import10.Wrapper_TimetableWishComponent();
    this._text_1 = this.renderer.createText((null as any),'\n    ',(null as any));
    this.compView_0.create(this._TimetableWishComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import9.TimetableWishComponent) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) { return this._TimetableWishComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = this.context.$implicit;
    this._TimetableWishComponent_0_3.check_timetableWish(currVal_0_0_0,throwOnChange,false);
    this._TimetableWishComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
var renderType_TimetableWisheslistComponent:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,styles_TimetableWisheslistComponent,{});
export class View_TimetableWisheslistComponent0 extends import1.AppView<import0.TimetableWisheslistComponent> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _RouterLinkWithHref_2_3:import12.Wrapper_RouterLinkWithHref;
  _text_3:any;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _text_7:any;
  _el_8:any;
  _text_9:any;
  _anchor_10:any;
  /*private*/ _vc_10:import11.ViewContainer;
  _TemplateRef_10_5:any;
  _NgFor_10_6:import13.Wrapper_NgFor;
  _text_11:any;
  _arr_16:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_TimetableWisheslistComponent0,renderType_TimetableWisheslistComponent,import5.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
    this._arr_16 = import3.pureProxy1((p0:any):any[] => {
      return [p0];
    });
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._el_0 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray2(2,'class','col-sm-12'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'a',new import3.InlineArray4(4,'class','btn btn-info','role','button'),(null as any));
    this._RouterLinkWithHref_2_3 = new import12.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import14.Router,this.parentIndex),this.parentView.injectorGet(import15.ActivatedRoute,this.parentIndex),this.parentView.injectorGet(import16.LocationStrategy,this.parentIndex));
    this._text_3 = this.renderer.createText(this._el_2,'Stay Focused!',(null as any));
    this._text_4 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_5 = import3.createRenderElement(this.renderer,this._el_0,'hr',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_6 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._text_7 = this.renderer.createText(parentRenderNode,'\n\n\n',(null as any));
    this._el_8 = import3.createRenderElement(this.renderer,parentRenderNode,'div',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_9 = this.renderer.createText(this._el_8,'\n    ',(null as any));
    this._anchor_10 = this.renderer.createTemplateAnchor(this._el_8,(null as any));
    this._vc_10 = new import11.ViewContainer(10,8,this,this._anchor_10);
    this._TemplateRef_10_5 = new import17.TemplateRef_(this,10,this._anchor_10);
    this._NgFor_10_6 = new import13.Wrapper_NgFor(this._vc_10.vcRef,this._TemplateRef_10_5,this.parentView.injectorGet(import18.IterableDiffers,this.parentIndex),this.ref);
    this._text_11 = this.renderer.createText(this._el_8,'\n',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_2,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_2));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._text_7,
      this._el_8,
      this._text_9,
      this._anchor_10,
      this._text_11
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import19.RouterLinkWithHref) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 3)))) { return this._RouterLinkWithHref_2_3.context; }
    if (((token === import17.TemplateRef) && (10 === requestNodeIndex))) { return this._TemplateRef_10_5; }
    if (((token === import20.NgFor) && (10 === requestNodeIndex))) { return this._NgFor_10_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_2_0_0:any = this._arr_16('/timetable');
    this._RouterLinkWithHref_2_3.check_routerLink(currVal_2_0_0,throwOnChange,false);
    this._RouterLinkWithHref_2_3.ngDoCheck(this,this._el_2,throwOnChange);
    const currVal_10_0_0:any = this.context.timetableWishes;
    this._NgFor_10_6.check_ngForOf(currVal_10_0_0,throwOnChange,false);
    this._NgFor_10_6.ngDoCheck(this,this._anchor_10,throwOnChange);
    this._vc_10.detectChangesInNestedViews(throwOnChange);
    this._RouterLinkWithHref_2_3.checkHost(this,this,this._el_2,throwOnChange);
  }
  destroyInternal():void {
    this._vc_10.destroyNestedViews();
    this._RouterLinkWithHref_2_3.ngOnDestroy();
  }
  createEmbeddedViewInternal(nodeIndex:number):import1.AppView<any> {
    if ((nodeIndex == 10)) { return new View_TimetableWisheslistComponent1(this.viewUtils,this,10,this._anchor_10,this._vc_10); }
    return (null as any);
  }
  handleEvent_2(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._RouterLinkWithHref_2_3.handleEvent(eventName,$event) && result);
    return result;
  }
}