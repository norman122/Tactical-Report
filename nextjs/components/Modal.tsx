import { FC, ReactNode } from 'react';
interface ModalProps {
   onClose: () => void;
   children: ReactNode;
}

const Modal: FC<ModalProps> = ({ onClose, children }) => {
   return (
       <div>
           <button onClick={onClose}>Close</button>
           {children}
       </div>
   );
}

export default Modal;