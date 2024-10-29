import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SupabaseService } from 'src/app/services/supabase.service';

@Component({
  selector: 'app-produtor',
  templateUrl: './produtor.component.html',
  styleUrls: ['./produtor.component.scss']
})
export class ProdutorComponent {

  constructor(private router: Router, private route: ActivatedRoute,private supabaseService: SupabaseService,) {}
  produtorId: string | null = null; // Variável para armazenar o ID do produtor
  dadosProdutor: any;
  apiarios: any;
  async ngOnInit(): Promise<void> {
    // Captura o ID da rota
    this.produtorId = this.route.snapshot.paramMap.get('id');

    this.dadosProdutor = await this.supabaseService.getDadosProdutor(this.produtorId!);

    this.apiarios = await this.supabaseService.getDadosApiarios(this.produtorId!);

    console.log(this.dadosProdutor)
  }


  goBack(): void {
    this.router.navigate(['home']); // Navega para a tela anterior
  }

  navigateToDetail(apiarioId: number): void {
    this.router.navigate(['/apiario', apiarioId]); // Redireciona para a nova rota
  }

}
