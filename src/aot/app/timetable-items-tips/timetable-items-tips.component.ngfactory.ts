import * as import0 from '../../../app/timetable-items-tips/timetable-items-tips.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../../app/timetable-auth/timetable-auth.service';
import * as import9 from '../../../app/timetable-item/timetable-itemslist.component';
import * as import10 from '../timetable-item/timetable-itemslist.component.ngfactory';
import * as import11 from '../../../app/timetable-item-input/timetable-item-input.component';
import * as import12 from '../timetable-item-input/timetable-item-input.component.ngfactory';
import * as import13 from '../../../app/timetable-tip/timetable-tipslist.component';
import * as import14 from '../timetable-tip/timetable-tipslist.component.ngfactory';
import * as import15 from '@angular/core/src/linker/view_container';
import * as import16 from '../../../app/timetable-item/timetable-item.service';
import * as import17 from '../../../app/timetable-tip/timetable-tip.service';
import * as import18 from '../../../app/timetable-title/timetable-title.component';
import * as import19 from '../timetable-title/timetable-title.component.ngfactory';
import * as import20 from '../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import21 from '@angular/core/src/linker/template_ref';
import * as import22 from '@angular/common/src/directives/ng_if';
export class Wrapper_TimetableItemsTipsComponent {
  /*private*/ _eventHandler:Function;
  context:import0.TimetableItemsTipsComponent;
  /*private*/ _changed:boolean;
  constructor(p0:any) {
    this._changed = false;
    this.context = new import0.TimetableItemsTipsComponent(p0);
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
var renderType_TimetableItemsTipsComponent_Host:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,([] as any[]),{});
class View_TimetableItemsTipsComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.TimetableItemsTipsComponent>;
  _TimetableItemsTipsComponent_0_3:Wrapper_TimetableItemsTipsComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_TimetableItemsTipsComponent_Host0,renderType_TimetableItemsTipsComponent_Host,import5.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'timetable-items-tips',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_TimetableItemsTipsComponent0(this.viewUtils,this,0,this._el_0);
    this._TimetableItemsTipsComponent_0_3 = new Wrapper_TimetableItemsTipsComponent(this.injectorGet(import8.TimetableAuthService,this.parentIndex));
    this.compView_0.create(this._TimetableItemsTipsComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._TimetableItemsTipsComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.TimetableItemsTipsComponent) && (0 === requestNodeIndex))) { return this._TimetableItemsTipsComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._TimetableItemsTipsComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const TimetableItemsTipsComponentNgFactory:import7.ComponentFactory<import0.TimetableItemsTipsComponent> = new import7.ComponentFactory<import0.TimetableItemsTipsComponent>('timetable-items-tips',View_TimetableItemsTipsComponent_Host0,import0.TimetableItemsTipsComponent);
const styles_TimetableItemsTipsComponent:any[] = ['.config[_ngcontent-%COMP%] {\n        display: inline-block;\n        text-align: right;\n        font-size: 12px;\n        font-style: italic;\n      }'];
class View_TimetableItemsTipsComponent1 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  compView_4:import1.AppView<import9.TimetableItemslistComponent>;
  _TimetableItemslistComponent_4_3:import10.Wrapper_TimetableItemslistComponent;
  _text_5:any;
  _el_6:any;
  compView_6:import1.AppView<import11.TimetableItemInputComponent>;
  _TimetableItemInputComponent_6_3:import12.Wrapper_TimetableItemInputComponent;
  _text_7:any;
  _text_8:any;
  _el_9:any;
  _text_10:any;
  _el_11:any;
  compView_11:import1.AppView<import13.TimetableTipslistComponent>;
  _TimetableTipslistComponent_11_3:import14.Wrapper_TimetableTipslistComponent;
  _text_12:any;
  _text_13:any;
  _text_14:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import15.ViewContainer) {
    super(View_TimetableItemsTipsComponent1,renderType_TimetableItemsTipsComponent,import5.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'div',new import3.InlineArray2(2,'class','row'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'div',new import3.InlineArray2(2,'class','col-sm-7'),(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._el_4 = import3.createRenderElement(this.renderer,this._el_2,'timetable-itemslist',import3.EMPTY_INLINE_ARRAY,(null as any));
    this.compView_4 = new import10.View_TimetableItemslistComponent0(this.viewUtils,this,4,this._el_4);
    this._TimetableItemslistComponent_4_3 = new import10.Wrapper_TimetableItemslistComponent(this.parentView.injectorGet(import16.TimetableItemService,this.parentIndex),this.parentView.injectorGet(import8.TimetableAuthService,this.parentIndex));
    this.compView_4.create(this._TimetableItemslistComponent_4_3.context);
    this._text_5 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._el_6 = import3.createRenderElement(this.renderer,this._el_2,'timetable-item-input',import3.EMPTY_INLINE_ARRAY,(null as any));
    this.compView_6 = new import12.View_TimetableItemInputComponent0(this.viewUtils,this,6,this._el_6);
    this._TimetableItemInputComponent_6_3 = new import12.Wrapper_TimetableItemInputComponent(this.parentView.injectorGet(import16.TimetableItemService,this.parentIndex),this.parentView.injectorGet(import8.TimetableAuthService,this.parentIndex));
    this.compView_6.create(this._TimetableItemInputComponent_6_3.context);
    this._text_7 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._text_8 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_9 = import3.createRenderElement(this.renderer,this._el_0,'div',new import3.InlineArray2(2,'class','col-sm-4 col-sm-offset-1'),(null as any));
    this._text_10 = this.renderer.createText(this._el_9,'\n        ',(null as any));
    this._el_11 = import3.createRenderElement(this.renderer,this._el_9,'timetable-tipslist',import3.EMPTY_INLINE_ARRAY,(null as any));
    this.compView_11 = new import14.View_TimetableTipslistComponent0(this.viewUtils,this,11,this._el_11);
    this._TimetableTipslistComponent_11_3 = new import14.Wrapper_TimetableTipslistComponent(this.parentView.injectorGet(import17.TimetableTipService,this.parentIndex));
    this.compView_11.create(this._TimetableTipslistComponent_11_3.context);
    this._text_12 = this.renderer.createText(this._el_9,'\n    ',(null as any));
    this._text_13 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._text_14 = this.renderer.createText(this._el_0,'\n',(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._text_8,
      this._el_9,
      this._text_10,
      this._el_11,
      this._text_12,
      this._text_13,
      this._text_14
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import9.TimetableItemslistComponent) && (4 === requestNodeIndex))) { return this._TimetableItemslistComponent_4_3.context; }
    if (((token === import11.TimetableItemInputComponent) && (6 === requestNodeIndex))) { return this._TimetableItemInputComponent_6_3.context; }
    if (((token === import13.TimetableTipslistComponent) && (11 === requestNodeIndex))) { return this._TimetableTipslistComponent_11_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._TimetableItemslistComponent_4_3.ngDoCheck(this,this._el_4,throwOnChange);
    this._TimetableItemInputComponent_6_3.ngDoCheck(this,this._el_6,throwOnChange);
    this._TimetableTipslistComponent_11_3.ngDoCheck(this,this._el_11,throwOnChange);
    this.compView_4.internalDetectChanges(throwOnChange);
    this.compView_6.internalDetectChanges(throwOnChange);
    this.compView_11.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_4.destroy();
    this.compView_6.destroy();
    this.compView_11.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
var renderType_TimetableItemsTipsComponent:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.Emulated,styles_TimetableItemsTipsComponent,{});
export class View_TimetableItemsTipsComponent0 extends import1.AppView<import0.TimetableItemsTipsComponent> {
  _el_0:any;
  compView_0:import1.AppView<import18.TimetableTitleComponent>;
  _TimetableTitleComponent_0_3:import19.Wrapper_TimetableTitleComponent;
  _text_1:any;
  _anchor_2:any;
  /*private*/ _vc_2:import15.ViewContainer;
  _TemplateRef_2_5:any;
  _NgIf_2_6:import20.Wrapper_NgIf;
  _text_3:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_TimetableItemsTipsComponent0,renderType_TimetableItemsTipsComponent,import5.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._el_0 = import3.createRenderElement(this.renderer,parentRenderNode,'timetable-title',import3.EMPTY_INLINE_ARRAY,(null as any));
    this.compView_0 = new import19.View_TimetableTitleComponent0(this.viewUtils,this,0,this._el_0);
    this._TimetableTitleComponent_0_3 = new import19.Wrapper_TimetableTitleComponent(this.parentView.injectorGet(import8.TimetableAuthService,this.parentIndex));
    this.compView_0.create(this._TimetableTitleComponent_0_3.context);
    this._text_1 = this.renderer.createText(parentRenderNode,'\n\n',(null as any));
    this._anchor_2 = this.renderer.createTemplateAnchor(parentRenderNode,(null as any));
    this._vc_2 = new import15.ViewContainer(2,(null as any),this,this._anchor_2);
    this._TemplateRef_2_5 = new import21.TemplateRef_(this,2,this._anchor_2);
    this._NgIf_2_6 = new import20.Wrapper_NgIf(this._vc_2.vcRef,this._TemplateRef_2_5);
    this._text_3 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._anchor_2,
      this._text_3
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import18.TimetableTitleComponent) && (0 === requestNodeIndex))) { return this._TimetableTitleComponent_0_3.context; }
    if (((token === import21.TemplateRef) && (2 === requestNodeIndex))) { return this._TemplateRef_2_5; }
    if (((token === import22.NgIf) && (2 === requestNodeIndex))) { return this._NgIf_2_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._TimetableTitleComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    const currVal_2_0_0:any = this.context.isUserLoggedIn;
    this._NgIf_2_6.check_ngIf(currVal_2_0_0,throwOnChange,false);
    this._NgIf_2_6.ngDoCheck(this,this._anchor_2,throwOnChange);
    this._vc_2.detectChangesInNestedViews(throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this._vc_2.destroyNestedViews();
    this.compView_0.destroy();
  }
  createEmbeddedViewInternal(nodeIndex:number):import1.AppView<any> {
    if ((nodeIndex == 2)) { return new View_TimetableItemsTipsComponent1(this.viewUtils,this,2,this._anchor_2,this._vc_2); }
    return (null as any);
  }
}