import * as import0 from '../../../app/timetable-tip/timetable-tipslist.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../../app/timetable-tip/timetable-tip.service';
import * as import9 from '../../../app/timetable-tip/timetable-tip.component';
import * as import10 from './timetable-tip.component.ngfactory';
import * as import11 from '@angular/core/src/linker/view_container';
import * as import12 from '../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import13 from '../../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import14 from '@angular/core/src/linker/template_ref';
import * as import15 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import16 from '@angular/router/src/router';
import * as import17 from '@angular/router/src/router_state';
import * as import18 from '@angular/common/src/location/location_strategy';
import * as import19 from '@angular/common/src/directives/ng_for';
import * as import20 from '@angular/router/src/directives/router_link';
export class Wrapper_TimetableTipslistComponent {
  /*private*/ _eventHandler:Function;
  context:import0.TimetableTipslistComponent;
  /*private*/ _changed:boolean;
  constructor(p0:any) {
    this._changed = false;
    this.context = new import0.TimetableTipslistComponent(p0);
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
var renderType_TimetableTipslistComponent_Host:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,([] as any[]),{});
class View_TimetableTipslistComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.TimetableTipslistComponent>;
  _TimetableTipslistComponent_0_3:Wrapper_TimetableTipslistComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_TimetableTipslistComponent_Host0,renderType_TimetableTipslistComponent_Host,import5.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'timetable-tipslist',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_TimetableTipslistComponent0(this.viewUtils,this,0,this._el_0);
    this._TimetableTipslistComponent_0_3 = new Wrapper_TimetableTipslistComponent(this.injectorGet(import8.TimetableTipService,this.parentIndex));
    this.compView_0.create(this._TimetableTipslistComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._TimetableTipslistComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.TimetableTipslistComponent) && (0 === requestNodeIndex))) { return this._TimetableTipslistComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._TimetableTipslistComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const TimetableTipslistComponentNgFactory:import7.ComponentFactory<import0.TimetableTipslistComponent> = new import7.ComponentFactory<import0.TimetableTipslistComponent>('timetable-tipslist',View_TimetableTipslistComponent_Host0,import0.TimetableTipslistComponent);
const styles_TimetableTipslistComponent:any[] = ([] as any[]);
class View_TimetableTipslistComponent1 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import9.TimetableTipComponent>;
  _TimetableTipComponent_0_3:import10.Wrapper_TimetableTipComponent;
  _text_1:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import11.ViewContainer) {
    super(View_TimetableTipslistComponent1,renderType_TimetableTipslistComponent,import5.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'timetable-tip',import3.EMPTY_INLINE_ARRAY,(null as any));
    this.compView_0 = new import10.View_TimetableTipComponent0(this.viewUtils,this,0,this._el_0);
    this._TimetableTipComponent_0_3 = new import10.Wrapper_TimetableTipComponent();
    this._text_1 = this.renderer.createText((null as any),'\n        ',(null as any));
    this.compView_0.create(this._TimetableTipComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import9.TimetableTipComponent) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) { return this._TimetableTipComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = this.context.$implicit;
    this._TimetableTipComponent_0_3.check_timetableTip(currVal_0_0_0,throwOnChange,false);
    this._TimetableTipComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
var renderType_TimetableTipslistComponent:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,styles_TimetableTipslistComponent,{});
export class View_TimetableTipslistComponent0 extends import1.AppView<import0.TimetableTipslistComponent> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _anchor_7:any;
  /*private*/ _vc_7:import11.ViewContainer;
  _TemplateRef_7_5:any;
  _NgFor_7_6:import12.Wrapper_NgFor;
  _text_8:any;
  _el_9:any;
  _text_10:any;
  _el_11:any;
  _text_12:any;
  _el_13:any;
  _RouterLinkWithHref_13_3:import13.Wrapper_RouterLinkWithHref;
  _text_14:any;
  _text_15:any;
  _text_16:any;
  _text_17:any;
  _text_18:any;
  _arr_23:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_TimetableTipslistComponent0,renderType_TimetableTipslistComponent,import5.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
    this._arr_23 = import3.pureProxy1((p0:any):any[] => {
      return [p0];
    });
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._el_0 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray2(2,'class','panel panel-success'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'div',new import3.InlineArray2(2,'class','panel-heading'),(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'\n        Tips\n    ',(null as any));
    this._text_4 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_5 = import3.createRenderElement(this.renderer,this._el_0,'div',new import3.InlineArray2(2,'class','panel-body'),(null as any));
    this._text_6 = this.renderer.createText(this._el_5,'\n        ',(null as any));
    this._anchor_7 = this.renderer.createTemplateAnchor(this._el_5,(null as any));
    this._vc_7 = new import11.ViewContainer(7,5,this,this._anchor_7);
    this._TemplateRef_7_5 = new import14.TemplateRef_(this,7,this._anchor_7);
    this._NgFor_7_6 = new import12.Wrapper_NgFor(this._vc_7.vcRef,this._TemplateRef_7_5,this.parentView.injectorGet(import15.IterableDiffers,this.parentIndex),this.ref);
    this._text_8 = this.renderer.createText(this._el_5,'\n        ',(null as any));
    this._el_9 = import3.createRenderElement(this.renderer,this._el_5,'hr',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_10 = this.renderer.createText(this._el_5,'\n        ',(null as any));
    this._el_11 = import3.createRenderElement(this.renderer,this._el_5,'div',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_12 = this.renderer.createText(this._el_11,'\n            ',(null as any));
    this._el_13 = import3.createRenderElement(this.renderer,this._el_11,'a',new import3.InlineArray4(4,'class','btn btn-info','role','button'),(null as any));
    this._RouterLinkWithHref_13_3 = new import13.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import16.Router,this.parentIndex),this.parentView.injectorGet(import17.ActivatedRoute,this.parentIndex),this.parentView.injectorGet(import18.LocationStrategy,this.parentIndex));
    this._text_14 = this.renderer.createText(this._el_13,'Stay Blessed!',(null as any));
    this._text_15 = this.renderer.createText(this._el_11,'\n        ',(null as any));
    this._text_16 = this.renderer.createText(this._el_5,'\n\n    ',(null as any));
    this._text_17 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._text_18 = this.renderer.createText(parentRenderNode,'\n\n\n\n\n',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_13,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_13));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._anchor_7,
      this._text_8,
      this._el_9,
      this._text_10,
      this._el_11,
      this._text_12,
      this._el_13,
      this._text_14,
      this._text_15,
      this._text_16,
      this._text_17,
      this._text_18
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import14.TemplateRef) && (7 === requestNodeIndex))) { return this._TemplateRef_7_5; }
    if (((token === import19.NgFor) && (7 === requestNodeIndex))) { return this._NgFor_7_6.context; }
    if (((token === import20.RouterLinkWithHref) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 14)))) { return this._RouterLinkWithHref_13_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_7_0_0:any = this.context.timetableTips;
    this._NgFor_7_6.check_ngForOf(currVal_7_0_0,throwOnChange,false);
    this._NgFor_7_6.ngDoCheck(this,this._anchor_7,throwOnChange);
    const currVal_13_0_0:any = this._arr_23('/wishes');
    this._RouterLinkWithHref_13_3.check_routerLink(currVal_13_0_0,throwOnChange,false);
    this._RouterLinkWithHref_13_3.ngDoCheck(this,this._el_13,throwOnChange);
    this._vc_7.detectChangesInNestedViews(throwOnChange);
    this._RouterLinkWithHref_13_3.checkHost(this,this,this._el_13,throwOnChange);
  }
  destroyInternal():void {
    this._vc_7.destroyNestedViews();
    this._RouterLinkWithHref_13_3.ngOnDestroy();
  }
  createEmbeddedViewInternal(nodeIndex:number):import1.AppView<any> {
    if ((nodeIndex == 7)) { return new View_TimetableTipslistComponent1(this.viewUtils,this,7,this._anchor_7,this._vc_7); }
    return (null as any);
  }
  handleEvent_13(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._RouterLinkWithHref_13_3.handleEvent(eventName,$event) && result);
    return result;
  }
}