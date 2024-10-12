import { Component } from '@angular/core';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent {

  listaProdutos: any[] = []

  constructor(private produtoService: ProdutosService) {}

  ngOnInit() {
    this.produtoService.pegaProdutos().subscribe(
      produtos => {
        this.listaProdutos = produtos
      }
    )
  }

}
