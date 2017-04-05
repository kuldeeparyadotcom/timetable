import * as import0 from '../../../app/timetable-title/timetable-title.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '@angular/core/src/change_detection/change_detection_util';
export class Wrapper_TimetableTitleComponent {
  /*private*/ _eventHandler:Function;
  context:import0.TimetableTitleComponent;
  /*private*/ _changed:boolean;
  constructor() {
    this._changed = false;
    this.context = new import0.TimetableTitleComponent();
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
var renderType_TimetableTitleComponent_Host:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,([] as any[]),{});
class View_TimetableTitleComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.TimetableTitleComponent>;
  _TimetableTitleComponent_0_3:Wrapper_TimetableTitleComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_TimetableTitleComponent_Host0,renderType_TimetableTitleComponent_Host,import5.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'timetable-title',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_TimetableTitleComponent0(this.viewUtils,this,0,this._el_0);
    this._TimetableTitleComponent_0_3 = new Wrapper_TimetableTitleComponent();
    this.compView_0.create(this._TimetableTitleComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._TimetableTitleComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.TimetableTitleComponent) && (0 === requestNodeIndex))) { return this._TimetableTitleComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._TimetableTitleComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const TimetableTitleComponentNgFactory:import7.ComponentFactory<import0.TimetableTitleComponent> = new import7.ComponentFactory<import0.TimetableTitleComponent>('timetable-title',View_TimetableTitleComponent_Host0,import0.TimetableTitleComponent);
const styles_TimetableTitleComponent:any[] = ([] as any[]);
var renderType_TimetableTitleComponent:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,styles_TimetableTitleComponent,{});
export class View_TimetableTitleComponent0 extends import1.AppView<import0.TimetableTitleComponent> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _text_7:any;
  _text_8:any;
  _text_9:any;
  _el_10:any;
  _text_11:any;
  _el_12:any;
  _text_13:any;
  _el_14:any;
  _text_15:any;
  _text_16:any;
  _text_17:any;
  /*private*/ _expr_18:any;
  /*private*/ _expr_19:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_TimetableTitleComponent0,renderType_TimetableTitleComponent,import5.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
    this._expr_18 = import8.UNINITIALIZED;
    this._expr_19 = import8.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._el_1 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray4(4,'class','col-sm-12','style','background-color:white;'),(null as any));
    this._text_2 = this.renderer.createText(this._el_1,'\n    ',(null as any));
    this._el_3 = import3.createRenderElement(this.renderer,this._el_1,'h1',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_4 = this.renderer.createText(this._el_3,'',(null as any));
    this._el_5 = import3.createRenderElement(this.renderer,this._el_3,'small',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_6 = this.renderer.createText(this._el_5,'',(null as any));
    this._text_7 = this.renderer.createText(this._el_3,' \n    ',(null as any));
    this._text_8 = this.renderer.createText(this._el_1,'\n',(null as any));
    this._text_9 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._el_10 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray2(2,'class','col-sm-12'),(null as any));
    this._text_11 = this.renderer.createText(this._el_10,'\n  ',(null as any));
    this._el_12 = import3.createRenderElement(this.renderer,this._el_10,'p',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_13 = this.renderer.createText(this._el_12,'Bookmark this page to view the ',(null as any));
    this._el_14 = import3.createRenderElement(this.renderer,this._el_12,'mark',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_15 = this.renderer.createText(this._el_14,' live status ',(null as any));
    this._text_16 = this.renderer.createText(this._el_12,'of preparation.',(null as any));
    this._text_17 = this.renderer.createText(this._el_10,' \n',(null as any));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._text_7,
      this._text_8,
      this._text_9,
      this._el_10,
      this._text_11,
      this._el_12,
      this._text_13,
      this._el_14,
      this._text_15,
      this._text_16,
      this._text_17
    ]
    ),(null as any));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_18:any = import3.inlineInterpolate(1,' \n        ',this.context.timetable_title,' ');
    if (import3.checkBinding(throwOnChange,this._expr_18,currVal_18)) {
      this.renderer.setText(this._text_4,currVal_18);
      this._expr_18 = currVal_18;
    }
    const currVal_19:any = import3.inlineInterpolate(1,' ',this.context.timetable_subtitle,' ');
    if (import3.checkBinding(throwOnChange,this._expr_19,currVal_19)) {
      this.renderer.setText(this._text_6,currVal_19);
      this._expr_19 = currVal_19;
    }
  }
}