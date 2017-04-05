import * as import0 from '../../../app/timetable-item/timetable-itemslist.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../../app/timetable-item/timetable-item.service';
import * as import9 from '../../../app/timetable-item/timetable-item.component';
import * as import10 from './timetable-item.component.ngfactory';
import * as import11 from '@angular/core/src/linker/view_container';
import * as import12 from '../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import13 from '@angular/core/src/linker/template_ref';
import * as import14 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import15 from '@angular/common/src/directives/ng_for';
export class Wrapper_TimetableItemslistComponent {
  /*private*/ _eventHandler:Function;
  context:import0.TimetableItemslistComponent;
  /*private*/ _changed:boolean;
  constructor(p0:any) {
    this._changed = false;
    this.context = new import0.TimetableItemslistComponent(p0);
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
var renderType_TimetableItemslistComponent_Host:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,([] as any[]),{});
class View_TimetableItemslistComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.TimetableItemslistComponent>;
  _TimetableItemslistComponent_0_3:Wrapper_TimetableItemslistComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_TimetableItemslistComponent_Host0,renderType_TimetableItemslistComponent_Host,import5.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'timetable-itemslist',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_TimetableItemslistComponent0(this.viewUtils,this,0,this._el_0);
    this._TimetableItemslistComponent_0_3 = new Wrapper_TimetableItemslistComponent(this.injectorGet(import8.TimetableItemService,this.parentIndex));
    this.compView_0.create(this._TimetableItemslistComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._TimetableItemslistComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.TimetableItemslistComponent) && (0 === requestNodeIndex))) { return this._TimetableItemslistComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._TimetableItemslistComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const TimetableItemslistComponentNgFactory:import7.ComponentFactory<import0.TimetableItemslistComponent> = new import7.ComponentFactory<import0.TimetableItemslistComponent>('timetable-itemslist',View_TimetableItemslistComponent_Host0,import0.TimetableItemslistComponent);
const styles_TimetableItemslistComponent:any[] = ([] as any[]);
class View_TimetableItemslistComponent1 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import9.TimetableItemComponent>;
  _TimetableItemComponent_0_3:import10.Wrapper_TimetableItemComponent;
  _text_1:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import11.ViewContainer) {
    super(View_TimetableItemslistComponent1,renderType_TimetableItemslistComponent,import5.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'timetable-item',import3.EMPTY_INLINE_ARRAY,(null as any));
    this.compView_0 = new import10.View_TimetableItemComponent0(this.viewUtils,this,0,this._el_0);
    this._TimetableItemComponent_0_3 = new import10.Wrapper_TimetableItemComponent(this.parentView.parentView.injectorGet(import8.TimetableItemService,this.parentView.parentIndex));
    this._text_1 = this.renderer.createText((null as any),'\n    ',(null as any));
    this.compView_0.create(this._TimetableItemComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import9.TimetableItemComponent) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) { return this._TimetableItemComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = this.context.$implicit;
    this._TimetableItemComponent_0_3.check_timetableItem(currVal_0_0_0,throwOnChange,false);
    this._TimetableItemComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._TimetableItemComponent_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
var renderType_TimetableItemslistComponent:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,styles_TimetableItemslistComponent,{});
export class View_TimetableItemslistComponent0 extends import1.AppView<import0.TimetableItemslistComponent> {
  _el_0:any;
  _text_1:any;
  _anchor_2:any;
  /*private*/ _vc_2:import11.ViewContainer;
  _TemplateRef_2_5:any;
  _NgFor_2_6:import12.Wrapper_NgFor;
  _text_3:any;
  _text_4:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_TimetableItemslistComponent0,renderType_TimetableItemslistComponent,import5.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._el_0 = import3.createRenderElement(this.renderer,parentRenderNode,'div',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0,(null as any));
    this._vc_2 = new import11.ViewContainer(2,0,this,this._anchor_2);
    this._TemplateRef_2_5 = new import13.TemplateRef_(this,2,this._anchor_2);
    this._NgFor_2_6 = new import12.Wrapper_NgFor(this._vc_2.vcRef,this._TemplateRef_2_5,this.parentView.injectorGet(import14.IterableDiffers,this.parentIndex),this.ref);
    this._text_3 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._text_4 = this.renderer.createText(parentRenderNode,'\n\n\n\n',(null as any));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._anchor_2,
      this._text_3,
      this._text_4
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import13.TemplateRef) && (2 === requestNodeIndex))) { return this._TemplateRef_2_5; }
    if (((token === import15.NgFor) && (2 === requestNodeIndex))) { return this._NgFor_2_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_2_0_0:any = this.context.timetableItems;
    this._NgFor_2_6.check_ngForOf(currVal_2_0_0,throwOnChange,false);
    this._NgFor_2_6.ngDoCheck(this,this._anchor_2,throwOnChange);
    this._vc_2.detectChangesInNestedViews(throwOnChange);
  }
  destroyInternal():void {
    this._vc_2.destroyNestedViews();
  }
  createEmbeddedViewInternal(nodeIndex:number):import1.AppView<any> {
    if ((nodeIndex == 2)) { return new View_TimetableItemslistComponent1(this.viewUtils,this,2,this._anchor_2,this._vc_2); }
    return (null as any);
  }
}