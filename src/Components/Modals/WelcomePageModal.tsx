import { useState } from 'react'
import Modal from '../Modal';
import LightLogo from './../../assets/Logo-Light.png'
import DarkLogo from './../../assets/Logo-Dark.png'
import { useTheme } from '../../Utils/Context/ThemeContext';

export default function WelcomePageModal() {
    const [showModal, setShowModal] = useState(true);

    setTimeout(() => {
      setShowModal(false);
    }, 3000);

    const { theme } = useTheme()

  return (
    <Modal props="dark:bg-gray-800 bg-gray-50 z-20" show={showModal}>
              <div className="w-fit h-fit my-auto">
        {theme === "light" ? (
          <img src={LightLogo} width={300} height={300} />
        ) : (
          <img src={DarkLogo} width={300} height={300} />
        )}
      </div>
    </Modal>
  )
}
