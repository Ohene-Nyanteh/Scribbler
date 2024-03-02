
/* Base Component for all Modal Designs */

interface ModalProps{
    props: string | undefined,
    show: boolean,
    children: any
}
export default function Modal({children, show, props}: ModalProps) {
  return (
  <div className={`${show ? 'block translate-y-0' : 'translate-y-[-100%]'} w-full h-screen absolute left-0 top-0 flex justify-center items-center  transition-transform duration-500 ease-in-out ${props}`}>
    <div className="w-fit h-fit">
        {children}
    </div>
</div>
  )
}
