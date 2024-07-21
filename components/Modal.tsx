interface ModalProps {
  id: string;
  heading: string;
  message: string;
  additionalButtons?: JSX.Element;
}

export default function Modal({
  id,
  heading,
  message,
  additionalButtons,
}: ModalProps) {
  return (
    <dialog id={id} className="modal">
      <div className="modal-box text-slate-100">
        <h3 className="font-bold text-lg ">{heading}</h3>
        <p className="py-4">{message}</p>
        <div className="modal-action">
          <form method="dialog">
            <div className="space-x-3">
              {additionalButtons}
              <button className="btn">Close</button>
            </div>
          </form>
        </div>
      </div>
    </dialog>
  );
}
