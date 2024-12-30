export interface GmailVariant {
  address: string;
  type: 'dot' | 'plus';
  original: string;
}

export interface Theme {
  isDark: boolean;
  toggle: () => void;
}

export interface ToastProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
}

export interface CopyButtonProps {
  text: string;
  onCopy?: () => void;
}

export interface VariantListProps {
  variants: GmailVariant[];
  onExport: () => void;
}