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
