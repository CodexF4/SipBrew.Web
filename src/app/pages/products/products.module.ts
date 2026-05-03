import { ProductsComponent } from "./pages/products.component";
import { NgModule } from "@angular/core";
import { ProductsRoutingModule } from "./products-routing.module";

@NgModule({
    declarations: [ProductsComponent],
    imports: [ProductsRoutingModule]
})
export class ProductsModule { }