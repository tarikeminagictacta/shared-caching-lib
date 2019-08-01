import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { CachedService } from './services/cached.service';

@NgModule({
  declarations: [HeaderComponent],
  imports: [],
  exports: [HeaderComponent],
  providers: [CachedService]
})
export class CobenUiCommonModule {}
