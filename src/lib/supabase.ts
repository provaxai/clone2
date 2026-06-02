import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://fkwivsebcbuxvobcpina.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_L21PHPkk4tSo6mExSJggVw_55zUeDtO';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export type AuthUser = {
  id: string;
  email: string;
  name?: string;
  plan?: 'free' | 'essencial' | 'premium';
  createdAt?: string;
};

/** Auth helpers */
export const auth = {
  signUp: (email: string, password: string, name: string) =>
    supabase.auth.signUp({
      email,
      password,
      options: { data: { name } },
    }),

  signIn: (email: string, password: string) =>
    supabase.auth.signInWithPassword({ email, password }),

  signOut: () => supabase.auth.signOut(),

  getUser: () => supabase.auth.getUser(),

  onAuthStateChange: (callback: Parameters<typeof supabase.auth.onAuthStateChange>[0]) =>
    supabase.auth.onAuthStateChange(callback),

  resetPassword: (email: string) =>
    supabase.auth.resetPasswordForEmail(email),
};

/** Database helpers — tabelas principais */
export const db = {
  // Perfil do aluno
  getProfile: (userId: string) =>
    supabase.from('profiles').select('*').eq('id', userId).single(),

  upsertProfile: (profile: Record<string, unknown>) =>
    supabase.from('profiles').upsert(profile),

  // Progresso
  getProgress: (userId: string) =>
    supabase.from('progress').select('*').eq('user_id', userId).single(),

  upsertProgress: (progress: Record<string, unknown>) =>
    supabase.from('progress').upsert(progress),

  // Mensagens da Athena
  getMessages: (userId: string) =>
    supabase.from('messages').select('*').eq('user_id', userId).order('created_at'),

  insertMessage: (message: Record<string, unknown>) =>
    supabase.from('messages').insert(message),

  clearMessages: (userId: string) =>
    supabase.from('messages').delete().eq('user_id', userId),

  // Biblioteca pessoal
  getLibrary: (userId: string) =>
    supabase.from('library').select('*').eq('user_id', userId).order('created_at', { ascending: false }),

  insertLibraryItem: (item: Record<string, unknown>) =>
    supabase.from('library').insert(item),

  deleteLibraryItem: (id: string) =>
    supabase.from('library').delete().eq('id', id),

  // Tópicos do edital
  getEditalTopics: (userId: string) =>
    supabase.from('edital_topics').select('*').eq('user_id', userId),

  upsertEditalTopics: (topics: Record<string, unknown>[]) =>
    supabase.from('edital_topics').upsert(topics),
};
