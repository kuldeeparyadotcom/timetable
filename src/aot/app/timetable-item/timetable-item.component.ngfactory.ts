import * as import0 from '../../../app/timetable-item/timetable-item.component';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '../../../app/timetable-item/timetable-item.service';
export class Wrapper_TimetableItemComponent {
  /*private*/ _eventHandler:Function;
  context:import0.TimetableItemComponent;
  /*private*/ _changed:boolean;
  /*private*/ _expr_0:any;
  subscription0:any;
  constructor(p0:any) {
    this._changed = false;
    this.context = new import0.TimetableItemComponent(p0);
    this._expr_0 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
    (this.subscription0 && this.subscription0.unsubscribe());
  }
  check_timetableItem(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.timetableItem = currValue;
      this._expr_0 = currValue;
    }
  }
  ngDoCheck(view:import2.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    return changed;
  }
  checkHost(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import2.AppView<any>,_eventHandler:any,emit0:boolean):void {
    this._eventHandler = _eventHandler;
    if (emit0) { (this.subscription0 = this.context.editClicked.subscribe(_eventHandler.bind(view,'editClicked'))); }
  }
}
var renderType_TimetableItemComponent_Host:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_TimetableItemComponent_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.TimetableItemComponent>;
  _TimetableItemComponent_0_3:Wrapper_TimetableItemComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_TimetableItemComponent_Host0,renderType_TimetableItemComponent_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'timetable-item',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_TimetableItemComponent0(this.viewUtils,this,0,this._el_0);
    this._TimetableItemComponent_0_3 = new Wrapper_TimetableItemComponent(this.injectorGet(import9.TimetableItemService,this.parentIndex));
    this.compView_0.create(this._TimetableItemComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import8.ComponentRef_<any>(0,this,this._el_0,this._TimetableItemComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.TimetableItemComponent) && (0 === requestNodeIndex))) { return this._TimetableItemComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
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
export const TimetableItemComponentNgFactory:import8.ComponentFactory<import0.TimetableItemComponent> = new import8.ComponentFactory<import0.TimetableItemComponent>('timetable-item',View_TimetableItemComponent_Host0,import0.TimetableItemComponent);
const styles_TimetableItemComponent:any[] = ['.config[_ngcontent-%COMP%] {\n        display: inline-block;\n        text-align: right;\n        font-size: 12px;\n        font-style: italic;\n      }'];
var renderType_TimetableItemComponent:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.Emulated,styles_TimetableItemComponent,{});
export class View_TimetableItemComponent0 extends import2.AppView<import0.TimetableItemComponent> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _el_6:any;
  _text_7:any;
  _el_8:any;
  _text_9:any;
  _el_10:any;
  _el_11:any;
  _text_12:any;
  _text_13:any;
  _text_14:any;
  _el_15:any;
  _text_16:any;
  _text_17:any;
  _text_18:any;
  _text_19:any;
  _text_20:any;
  _text_21:any;
  _el_22:any;
  _text_23:any;
  _el_24:any;
  _text_25:any;
  _el_26:any;
  _text_27:any;
  _text_28:any;
  _el_29:any;
  _text_30:any;
  _text_31:any;
  _text_32:any;
  _text_33:any;
  /*private*/ _expr_34:any;
  /*private*/ _expr_35:any;
  /*private*/ _expr_36:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_TimetableItemComponent0,renderType_TimetableItemComponent,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
    this._expr_34 = import1.UNINITIALIZED;
    this._expr_35 = import1.UNINITIALIZED;
    this._expr_36 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._el_0 = import3.createRenderElement(this.renderer,parentRenderNode,'article',new import3.InlineArray2(2,'class','panel panel-default'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'div',new import3.InlineArray2(2,'class','panel-body'),(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._el_4 = import3.createRenderElement(this.renderer,this._el_2,'div',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_5 = this.renderer.createText(this._el_4,'\n                ',(null as any));
    this._el_6 = import3.createRenderElement(this.renderer,this._el_4,'div',new import3.InlineArray2(2,'class','row'),(null as any));
    this._text_7 = this.renderer.createText(this._el_6,'\n                    ',(null as any));
    this._el_8 = import3.createRenderElement(this.renderer,this._el_6,'div',new import3.InlineArray2(2,'class','col-sm-4 text-success'),(null as any));
    this._text_9 = this.renderer.createText(this._el_8,'\n                        ',(null as any));
    this._el_10 = import3.createRenderElement(this.renderer,this._el_8,'strong',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._el_11 = import3.createRenderElement(this.renderer,this._el_10,'em',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_12 = this.renderer.createText(this._el_11,'',(null as any));
    this._text_13 = this.renderer.createText(this._el_8,'\n                    ',(null as any));
    this._text_14 = this.renderer.createText(this._el_6,'\n                    ',(null as any));
    this._el_15 = import3.createRenderElement(this.renderer,this._el_6,'div',new import3.InlineArray2(2,'class','col-sm-7 col-sm-offset-1 lead'),(null as any));
    this._text_16 = this.renderer.createText(this._el_15,'',(null as any));
    this._text_17 = this.renderer.createText(this._el_6,'\n                ',(null as any));
    this._text_18 = this.renderer.createText(this._el_4,'  \n                        \n                    ',(null as any));
    this._text_19 = this.renderer.createText(this._el_4,'\n      ',(null as any));
    this._text_20 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._text_21 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_22 = import3.createRenderElement(this.renderer,this._el_0,'footer',new import3.InlineArray2(2,'class','panel-footer'),(null as any));
    this._text_23 = this.renderer.createText(this._el_22,'\n        ',(null as any));
    this._el_24 = import3.createRenderElement(this.renderer,this._el_22,'div',new import3.InlineArray2(2,'class','config'),(null as any));
    this._text_25 = this.renderer.createText(this._el_24,'\n            ',(null as any));
    this._el_26 = import3.createRenderElement(this.renderer,this._el_24,'a',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_27 = this.renderer.createText(this._el_26,'Edit',(null as any));
    this._text_28 = this.renderer.createText(this._el_24,'\n            ',(null as any));
    this._el_29 = import3.createRenderElement(this.renderer,this._el_24,'a',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_30 = this.renderer.createText(this._el_29,'Delete',(null as any));
    this._text_31 = this.renderer.createText(this._el_24,'\n        ',(null as any));
    this._text_32 = this.renderer.createText(this._el_22,'\n    ',(null as any));
    this._text_33 = this.renderer.createText(this._el_0,'\n',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_26,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_26));
    var disposable_1:Function = import3.subscribeToRenderElement(this,this._el_29,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_29));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._el_8,
      this._text_9,
      this._el_10,
      this._el_11,
      this._text_12,
      this._text_13,
      this._text_14,
      this._el_15,
      this._text_16,
      this._text_17,
      this._text_18,
      this._text_19,
      this._text_20,
      this._text_21,
      this._el_22,
      this._text_23,
      this._el_24,
      this._text_25,
      this._el_26,
      this._text_27,
      this._text_28,
      this._el_29,
      this._text_30,
      this._text_31,
      this._text_32,
      this._text_33
    ]
    ),[
      disposable_0,
      disposable_1
    ]
    );
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_34:any = this.context.timetableItem.status;
    if (import3.checkBinding(throwOnChange,this._expr_34,currVal_34)) {
      this.renderer.setElementProperty(this._el_4,'className',currVal_34);
      this._expr_34 = currVal_34;
    }
    const currVal_35:any = import3.inlineInterpolate(2,' ',this.context.timetableItem.start_time,' - ',this.context.timetableItem.end_time,' ');
    if (import3.checkBinding(throwOnChange,this._expr_35,currVal_35)) {
      this.renderer.setText(this._text_12,currVal_35);
      this._expr_35 = currVal_35;
    }
    const currVal_36:any = import3.inlineInterpolate(1,'\n                        ',this.context.timetableItem.description,'\n                    ');
    if (import3.checkBinding(throwOnChange,this._expr_36,currVal_36)) {
      this.renderer.setText(this._text_16,currVal_36);
      this._expr_36 = currVal_36;
    }
  }
  handleEvent_26(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.context.onEdit()) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
  handleEvent_29(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.context.onDelete()) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}