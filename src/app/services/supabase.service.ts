import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient;

  // Inicialize o cliente Supabase com sua URL e Chave
  private supabaseUrl = 'https://wulgofxfxryonvuvgead.supabase.co';
  private supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind1bGdvZnhmeHJ5b252dXZnZWFkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA2OTQ4MjMsImV4cCI6MjAzNjI3MDgyM30.A0iM1NpIonBwf8w4S1sUAAd9CHqJak8OqDR7mzcMSzw';

  constructor() {
    this.supabase = createClient(this.supabaseUrl, this.supabaseKey);
  }

  // Exemplo de método para buscar dados de uma tabela
  async getDataFromTable(table: string) {
    const { data, error } = await this.supabase
      .from(table)
      .select('*');
    if (error) {
      console.error('Erro ao buscar dados:', error);
    }
    return data;
  }

  async getProdutoresWithEmails() {
    // 1. Busca os produtores
    const { data: produtores, error: produtoresError } = await this.supabase
      .from('produtores')
      .select('*'); // Pegue todos os campos ou apenas os que você precisa

    if (produtoresError) {
      console.error('Erro ao buscar produtores:', produtoresError);
      return null;
    }

    // 2. Busca os usuários (auth.users)
    const { data: usuarios, error: usuariosError } = await this.supabase
      .from('auth.users')
      .select('id, email');

    if (usuariosError) {
      console.error('Erro ao buscar usuários:', usuariosError);
      return null;
    }

    // 3. Combina os dados manualmente
    const produtoresComEmail = produtores.map(produtor => {
      const usuario = usuarios.find(user => user.id === produtor.user_id); // Ajuste conforme a chave de relacionamento
      return {
        ...produtor,
        email: usuario ? usuario.email : null, // Adiciona o email do usuário
      };
    });

    return produtoresComEmail; // Retorna os dados combinados
  }

  async getDadosProdutor(id: string) {
    const {data, error} = await this.supabase
    .from("produtores")
    .select('*')
    .eq('id',id)
    .single()

    return data;
  }

  async getDadosApiarios(id: string) {
    const {data, error} = await this.supabase
    .from("apiario")
    .select('*')
    .eq('produtor_id',id)
    .eq('status',true)
    .order('created_at')

    return data;
  }

  async getDadosApiario(id: string) {
    const {data, error} = await this.supabase
    .from("apiario")
    .select('*')
    .eq('id',id)
    .single()

    return data;
  }

  async getDadosColmeia(id: string) {
    const {data, error} = await this.supabase
    .from("colmeia")
    .select('*')
    .eq('id',id)
    .eq('status',true)
    .single()

    return data;
  }


  async getRelatorios(id: string) {
    const { data, error } = await this.supabase
    .from('relatorio')
    .select(`
      *,
      relatorioColmeia(*)
    `)
    .eq('apiario_id', id)
    .order('dataVisita', { ascending: false });

    return data
  }

  async getRelatoriosColmeias(id: string) {
    const { data, error } = await this.supabase
    .from('relatorioColmeia')
    .select(`
      *,
      relatorio(dataVisita)
    `)
    .eq('colmeia_id', id)

    return data?.sort((a, b) => new Date(b.relatorio.dataVisita).getTime() - new Date(a.relatorio.dataVisita).getTime());
  }

  async getDadosColmeias(id: string) {
    const {data, error} = await this.supabase
    .from("colmeia")
    .select('*')
    .eq('apiario_id',id)
    .eq('status',true)
    .order('created_at')

    return data;
  }



  // Exemplo de método para adicionar dados a uma tabela
  async addDataToTable(table: string, data: any) {
    const { error } = await this.supabase
      .from(table)
      .insert([data]);
    if (error) {
      console.error('Erro ao adicionar dados:', error);
    }
  }
}
