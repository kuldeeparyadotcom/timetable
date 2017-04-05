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
  _text_8:any;
  _el_9:any;
  _text_10:any;
  _text_11:any;
  _el_12:any;
  _text_13:any;
  _text_14:any;
  _text_15:any;
  _text_16:any;
  _el_17:any;
  _text_18:any;
  _el_19:any;
  _text_20:any;
  _el_21:any;
  _text_22:any;
  _text_23:any;
  _el_24:any;
  _text_25:any;
  _text_26:any;
  _text_27:any;
  _text_28:any;
  /*private*/ _expr_29:any;
  /*private*/ _expr_30:any;
  /*private*/ _expr_31:any;
  /*private*/ _expr_32:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_TimetableItemComponent0,renderType_TimetableItemComponent,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
    this._expr_29 = import1.UNINITIALIZED;
    this._expr_30 = import1.UNINITIALIZED;
    this._expr_31 = import1.UNINITIALIZED;
    this._expr_32 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._el_0 = import3.createRenderElement(this.renderer,parentRenderNode,'article',new import3.InlineArray2(2,'class','panel panel-default'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'div',new import3.InlineArray2(2,'class','panel-body'),(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._el_4 = import3.createRenderElement(this.renderer,this._el_2,'div',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_5 = this.renderer.createText(this._el_4,'\n                    ',(null as any));
    this._el_6 = import3.createRenderElement(this.renderer,this._el_4,'p',new import3.InlineArray2(2,'class','col-sm-2'),(null as any));
    this._text_7 = this.renderer.createText(this._el_6,'',(null as any));
    this._text_8 = this.renderer.createText(this._el_4,'\n                    ',(null as any));
    this._el_9 = import3.createRenderElement(this.renderer,this._el_4,'p',new import3.InlineArray2(2,'class','col-sm-2'),(null as any));
    this._text_10 = this.renderer.createText(this._el_9,'',(null as any));
    this._text_11 = this.renderer.createText(this._el_4,'\n                    ',(null as any));
    this._el_12 = import3.createRenderElement(this.renderer,this._el_4,'p',new import3.InlineArray2(2,'class','col-sm-8'),(null as any));
    this._text_13 = this.renderer.createText(this._el_12,'',(null as any));
    this._text_14 = this.renderer.createText(this._el_4,'\n      ',(null as any));
    this._text_15 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._text_16 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_17 = import3.createRenderElement(this.renderer,this._el_0,'footer',new import3.InlineArray2(2,'class','panel-footer'),(null as any));
    this._text_18 = this.renderer.createText(this._el_17,'\n        ',(null as any));
    this._el_19 = import3.createRenderElement(this.renderer,this._el_17,'div',new import3.InlineArray2(2,'class','config'),(null as any));
    this._text_20 = this.renderer.createText(this._el_19,'\n            ',(null as any));
    this._el_21 = import3.createRenderElement(this.renderer,this._el_19,'a',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_22 = this.renderer.createText(this._el_21,'Edit',(null as any));
    this._text_23 = this.renderer.createText(this._el_19,'\n            ',(null as any));
    this._el_24 = import3.createRenderElement(this.renderer,this._el_19,'a',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_25 = this.renderer.createText(this._el_24,'Delete',(null as any));
    this._text_26 = this.renderer.createText(this._el_19,'\n        ',(null as any));
    this._text_27 = this.renderer.createText(this._el_17,'\n    ',(null as any));
    this._text_28 = this.renderer.createText(this._el_0,'\n',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_21,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_21));
    var disposable_1:Function = import3.subscribeToRenderElement(this,this._el_24,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_24));
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
      this._text_11,
      this._el_12,
      this._text_13,
      this._text_14,
      this._text_15,
      this._text_16,
      this._el_17,
      this._text_18,
      this._el_19,
      this._text_20,
      this._el_21,
      this._text_22,
      this._text_23,
      this._el_24,
      this._text_25,
      this._text_26,
      this._text_27,
      this._text_28
    ]
    ),[
      disposable_0,
      disposable_1
    ]
    );
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_29:any = this.context.timetableItem.status;
    if (import3.checkBinding(throwOnChange,this._expr_29,currVal_29)) {
      this.renderer.setElementProperty(this._el_4,'className',currVal_29);
      this._expr_29 = currVal_29;
    }
    const currVal_30:any = import3.inlineInterpolate(1,'\n                       ',this.context.timetableItem.start_time,'\n                    ');
    if (import3.checkBinding(throwOnChange,this._expr_30,currVal_30)) {
      this.renderer.setText(this._text_7,currVal_30);
      this._expr_30 = currVal_30;
    }
    const currVal_31:any = import3.inlineInterpolate(1,'\n                        ',this.context.timetableItem.end_time,'\n                    ');
    if (import3.checkBinding(throwOnChange,this._expr_31,currVal_31)) {
      this.renderer.setText(this._text_10,currVal_31);
      this._expr_31 = currVal_31;
    }
    const currVal_32:any = import3.inlineInterpolate(1,'\n                        ',this.context.timetableItem.description,'\n                    ');
    if (import3.checkBinding(throwOnChange,this._expr_32,currVal_32)) {
      this.renderer.setText(this._text_13,currVal_32);
      this._expr_32 = currVal_32;
    }
  }
  handleEvent_21(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.context.onEdit()) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
  handleEvent_24(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.context.onDelete()) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}