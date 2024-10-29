import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SupabaseService } from 'src/app/services/supabase.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-apiario',
  templateUrl: './apiario.component.html',
  styleUrls: ['./apiario.component.scss']
})
export class ApiarioComponent {
  constructor(private router: Router, private route: ActivatedRoute,private supabaseService: SupabaseService,private location: Location) {}
  apiarioId: string | null = null; // Variável para armazenar o ID do produtor
  dadosApiario: any;
  colmeias: any;

  async ngOnInit(): Promise<void> {
    // Captura o ID da rota
    this.apiarioId = this.route.snapshot.paramMap.get('id');

    this.dadosApiario = await this.supabaseService.getDadosApiario(this.apiarioId!);

    this.colmeias = await this.supabaseService.getDadosColmeias(this.apiarioId!);

    console.log(this.dadosApiario)
  }


goBack(): void {
    this.location.back();// Navega para a tela anterior
  }
}
