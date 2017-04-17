import * as import0 from '../../../app/timetable-tip/timetable-tip.component';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
export class Wrapper_TimetableTipComponent {
  /*private*/ _eventHandler:Function;
  context:import0.TimetableTipComponent;
  /*private*/ _changed:boolean;
  /*private*/ _expr_0:any;
  constructor() {
    this._changed = false;
    this.context = new import0.TimetableTipComponent();
    this._expr_0 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  check_timetableTip(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.timetableTip = currValue;
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
  subscribe(view:import2.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
var renderType_TimetableTipComponent_Host:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_TimetableTipComponent_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.TimetableTipComponent>;
  _TimetableTipComponent_0_3:Wrapper_TimetableTipComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_TimetableTipComponent_Host0,renderType_TimetableTipComponent_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'timetable-tip',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_TimetableTipComponent0(this.viewUtils,this,0,this._el_0);
    this._TimetableTipComponent_0_3 = new Wrapper_TimetableTipComponent();
    this.compView_0.create(this._TimetableTipComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import8.ComponentRef_<any>(0,this,this._el_0,this._TimetableTipComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.TimetableTipComponent) && (0 === requestNodeIndex))) { return this._TimetableTipComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
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
export const TimetableTipComponentNgFactory:import8.ComponentFactory<import0.TimetableTipComponent> = new import8.ComponentFactory<import0.TimetableTipComponent>('timetable-tip',View_TimetableTipComponent_Host0,import0.TimetableTipComponent);
const styles_TimetableTipComponent:any[] = ['.config[_ngcontent-%COMP%] {\n        display: inline-block;\n        text-align: right;\n        font-size: 12px;\n        font-style: italic;\n      }'];
var renderType_TimetableTipComponent:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.Emulated,styles_TimetableTipComponent,{});
export class View_TimetableTipComponent0 extends import2.AppView<import0.TimetableTipComponent> {
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
  _text_12:any;
  _text_13:any;
  /*private*/ _expr_14:any;
  /*private*/ _expr_15:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_TimetableTipComponent0,renderType_TimetableTipComponent,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
    this._expr_14 = import1.UNINITIALIZED;
    this._expr_15 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._el_0 = import3.createRenderElement(this.renderer,parentRenderNode,'div',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'div',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'',(null as any));
    this._el_4 = import3.createRenderElement(this.renderer,this._el_2,'div',new import3.InlineArray2(2,'class','config col-sm-offset-1 pull-right'),(null as any));
    this._text_5 = this.renderer.createText(this._el_4,'\n                ',(null as any));
    this._el_6 = import3.createRenderElement(this.renderer,this._el_4,'a',new import3.InlineArray2(2,'href','#'),(null as any));
    this._text_7 = this.renderer.createText(this._el_6,'Edit',(null as any));
    this._text_8 = this.renderer.createText(this._el_4,'\n                ',(null as any));
    this._el_9 = import3.createRenderElement(this.renderer,this._el_4,'a',new import3.InlineArray2(2,'href','#'),(null as any));
    this._text_10 = this.renderer.createText(this._el_9,'Delete',(null as any));
    this._text_11 = this.renderer.createText(this._el_4,'\n            ',(null as any));
    this._text_12 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._text_13 = this.renderer.createText(this._el_0,'\n',(null as any));
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
      this._text_12,
      this._text_13
    ]
    ),(null as any));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_14:any = this.context.timetableTip.tip_color;
    if (import3.checkBinding(throwOnChange,this._expr_14,currVal_14)) {
      this.renderer.setElementProperty(this._el_2,'className',currVal_14);
      this._expr_14 = currVal_14;
    }
    const currVal_15:any = import3.inlineInterpolate(1,'\n             ',this.context.timetableTip.tip_description,'\n             ');
    if (import3.checkBinding(throwOnChange,this._expr_15,currVal_15)) {
      this.renderer.setText(this._text_3,currVal_15);
      this._expr_15 = currVal_15;
    }
  }
}