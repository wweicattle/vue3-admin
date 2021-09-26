import { ElButton,ElUpload } from 'element-plus';
// import type {componentInstan} from "vue"

export default function installElement(app:any) {
  app.component(ElButton.name, ElButton).use(ElUpload);
}
