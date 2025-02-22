interface PopUpDOEProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

export const PopUpDOE = ({ visible, setVisible }: PopUpDOEProps) => {
  return (
    <div
      className={`
            ${visible ? "scale-100 opacity-100" : "scale-95 opacity-0"} 
            absolute top-full right-0 
            w-96 p-6
            bg-primary 
            shadow-lg rounded-md 
            transform transition-all duration-200 
            mt-2
        `}
    >
      <div className="flex gap-6">
        <div className="text-quaternary flex flex-col gap-4 flex-1">
          <h3 className="font-medium text-lg opacity-80">Faça sua doação</h3>
          <div className="space-y-2 opacity-50">
            <p>PIX: 46529785000195</p>
            <p>Banco: 033</p>
            <p>Agência: 4646</p>
            <p>Conta: 13004390-0</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-32 h-32 bg-quaternary bg-opacity-5 rounded-lg flex items-center justify-center">
            <img
              src="/img/QRcode.png"
              alt="QR Code PIX"
              className="w-28 h-28 object-contain"
            />
          </div>
          <span className="text-sm text-quaternary opacity-50">
            Escaneie o QR Code
          </span>
        </div>
      </div>
      <button
        className="w-full mt-4 bg-secondary text-primary py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors"
        onClick={() => setVisible(false)}
      >
        Fechar
      </button>
    </div>
  );
};
