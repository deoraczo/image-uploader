import { VuexModule, Module, Action, Mutation } from "vuex-module-decorators";

@Module({ namespaced: true })

class UploaderModule extends VuexModule {


  private formData = {} ;
  private status = "Upload";
  private previewUrl = "";

  @Mutation
  public CHANGE_STATUS(newStatus: string): void {
    this.status = newStatus;
  }

  @Mutation
  public CHANGE_PREVIEW_URL(previewUrl: string): void {
    this.previewUrl = previewUrl;
  }

  @Mutation
  public SET_FORM(formData: {}): void {
    this.formData = formData;
  }

  @Action
  public uploading(payload: { status: string, formData: {} }): void {
    this.context.commit('CHANGE_STATUS', payload.status);
    this.context.commit('SET_FORM', payload.formData)
  }


  @Action
  public uploaded(payload: { status: string, previewUrl: string }) {
    this.context.commit('CHANGE_STATUS', payload.status);
    this.context.commit('CHANGE_PREVIEW_URL', payload.previewUrl);
  }

  @Action
  public upload() {
    this.context.commit('CHANGE_STATUS', 'Upload');
    this.context.commit('CHANGE_PREVIEW_URL', '');
    this.context.commit('SET_FORM', {})
  }

  get getStatus(): string {
    return this.status;
  }

  get getFormData(): {} {
    return this.formData;
  }

  get getPreviewUrl(): string {
    return this.previewUrl;
  }

}

export default  UploaderModule;
