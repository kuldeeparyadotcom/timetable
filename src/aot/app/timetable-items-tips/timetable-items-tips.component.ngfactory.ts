import * as import0 from '../../../app/timetable-items-tips/timetable-items-tips.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../../app/timetable-item-input/timetable-item-input.component';
import * as import9 from '../timetable-item-input/timetable-item-input.component.ngfactory';
import * as import10 from '../../../app/timetable-item/timetable-itemslist.component';
import * as import11 from '../timetable-item/timetable-itemslist.component.ngfactory';
import * as import12 from '../../../app/timetable-tip/timetable-tipslist.component';
import * as import13 from '../timetable-tip/timetable-tipslist.component.ngfactory';
import * as import14 from '../../../app/timetable-item/timetable-item.service';
import * as import15 from '../../../app/timetable-tip/timetable-tip.service';
export class Wrapper_TimetableItemsTipsComponent {
  /*private*/ _eventHandler:Function;
  context:import0.TimetableItemsTipsComponent;
  /*private*/ _changed:boolean;
  constructor() {
    this._changed = false;
    this.context = new import0.TimetableItemsTipsComponent();
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
    this._TimetableItemsTipsComponent_0_3 = new Wrapper_TimetableItemsTipsComponent();
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
var renderType_TimetableItemsTipsComponent:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.Emulated,styles_TimetableItemsTipsComponent,{});
export class View_TimetableItemsTipsComponent0 extends import1.AppView<import0.TimetableItemsTipsComponent> {
  _el_0:any;
  compView_0:import1.AppView<import8.TimetableItemInputComponent>;
  _TimetableItemInputComponent_0_3:import9.Wrapper_TimetableItemInputComponent;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _el_6:any;
  compView_6:import1.AppView<import10.TimetableItemslistComponent>;
  _TimetableItemslistComponent_6_3:import11.Wrapper_TimetableItemslistComponent;
  _text_7:any;
  _text_8:any;
  _el_9:any;
  _text_10:any;
  _el_11:any;
  compView_11:import1.AppView<import12.TimetableTipslistComponent>;
  _TimetableTipslistComponent_11_3:import13.Wrapper_TimetableTipslistComponent;
  _text_12:any;
  _text_13:any;
  _text_14:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_TimetableItemsTipsComponent0,renderType_TimetableItemsTipsComponent,import5.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._el_0 = import3.createRenderElement(this.renderer,parentRenderNode,'timetable-item-input',import3.EMPTY_INLINE_ARRAY,(null as any));
    this.compView_0 = new import9.View_TimetableItemInputComponent0(this.viewUtils,this,0,this._el_0);
    this._TimetableItemInputComponent_0_3 = new import9.Wrapper_TimetableItemInputComponent(this.parentView.injectorGet(import14.TimetableItemService,this.parentIndex));
    this.compView_0.create(this._TimetableItemInputComponent_0_3.context);
    this._text_1 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray2(2,'class','row col-sm-12'),(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._el_4 = import3.createRenderElement(this.renderer,this._el_2,'div',new import3.InlineArray2(2,'class','col-sm-7'),(null as any));
    this._text_5 = this.renderer.createText(this._el_4,'\n        ',(null as any));
    this._el_6 = import3.createRenderElement(this.renderer,this._el_4,'timetable-itemslist',import3.EMPTY_INLINE_ARRAY,(null as any));
    this.compView_6 = new import11.View_TimetableItemslistComponent0(this.viewUtils,this,6,this._el_6);
    this._TimetableItemslistComponent_6_3 = new import11.Wrapper_TimetableItemslistComponent(this.parentView.injectorGet(import14.TimetableItemService,this.parentIndex));
    this.compView_6.create(this._TimetableItemslistComponent_6_3.context);
    this._text_7 = this.renderer.createText(this._el_4,'\n    ',(null as any));
    this._text_8 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._el_9 = import3.createRenderElement(this.renderer,this._el_2,'div',new import3.InlineArray2(2,'class','col-sm-4 col-sm-offset-1'),(null as any));
    this._text_10 = this.renderer.createText(this._el_9,'\n        ',(null as any));
    this._el_11 = import3.createRenderElement(this.renderer,this._el_9,'timetable-tipslist',import3.EMPTY_INLINE_ARRAY,(null as any));
    this.compView_11 = new import13.View_TimetableTipslistComponent0(this.viewUtils,this,11,this._el_11);
    this._TimetableTipslistComponent_11_3 = new import13.Wrapper_TimetableTipslistComponent(this.parentView.injectorGet(import15.TimetableTipService,this.parentIndex));
    this.compView_11.create(this._TimetableTipslistComponent_11_3.context);
    this._text_12 = this.renderer.createText(this._el_9,'\n    ',(null as any));
    this._text_13 = this.renderer.createText(this._el_2,'\n',(null as any));
    this._text_14 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
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
    if (((token === import8.TimetableItemInputComponent) && (0 === requestNodeIndex))) { return this._TimetableItemInputComponent_0_3.context; }
    if (((token === import10.TimetableItemslistComponent) && (6 === requestNodeIndex))) { return this._TimetableItemslistComponent_6_3.context; }
    if (((token === import12.TimetableTipslistComponent) && (11 === requestNodeIndex))) { return this._TimetableTipslistComponent_11_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._TimetableItemInputComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this._TimetableItemslistComponent_6_3.ngDoCheck(this,this._el_6,throwOnChange);
    this._TimetableTipslistComponent_11_3.ngDoCheck(this,this._el_11,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
    this.compView_6.internalDetectChanges(throwOnChange);
    this.compView_11.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this.compView_6.destroy();
    this.compView_11.destroy();
  }
}