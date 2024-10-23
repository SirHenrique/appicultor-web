import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { createClient, SupabaseClient, Session } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private supabase: SupabaseClient;
  private supabaseUrl = 'https://wulgofxfxryonvuvgead.supabase.co';
  private supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind1bGdvZnhmeHJ5b252dXZnZWFkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA2OTQ4MjMsImV4cCI6MjAzNjI3MDgyM30.A0iM1NpIonBwf8w4S1sUAAd9CHqJak8OqDR7mzcMSzw';
  private session: Session | null = null;

  constructor(private router: Router) {
    this.supabase = createClient(this.supabaseUrl, this.supabaseKey);

    // Observar alterações no estado da autenticação
    this.supabase.auth.onAuthStateChange((_event, session) => {
      this.session = session;
    });
  }

  // Login com email e senha
  async login(email: string, password: string): Promise<any> {
    const { error } = await this.supabase.auth.signInWithPassword({
      email,
      password
    });
    if (error) {
      console.error('Erro ao fazer login:', error);
      return false;
    } else {
      return true;
    }
  }

  // Logout
  async logout() {
    const { error } = await this.supabase.auth.signOut();
    if (error) {
      console.error('Erro ao fazer logout:', error);
    } else {
      this.router.navigate(['/login']);
    }
  }

  // Verificar se o usuário está autenticado
  isAuthenticated(): boolean {
    return !!this.session;
  }
}
