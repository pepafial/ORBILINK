export type AccountType = "fornecedor" | "revendedor";

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          full_name: string;
          account_type: AccountType;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          full_name: string;
          account_type: AccountType;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          full_name?: string;
          account_type?: AccountType;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: {
      account_type: AccountType;
    };
  };
};
