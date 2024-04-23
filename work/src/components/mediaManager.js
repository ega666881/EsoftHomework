import jsIcon from '../assets/jsIcon.svg'
import avatar from '../assets/avatar.jpg'
import htmlIcon from '../assets/htmlIcon.svg'
import cssIcon from '../assets/cssIcon.svg'
import tsIcon from '../assets/tsIcon.svg'
import pythonIcon from '../assets/pythonIcon.svg'
import sqlIcon from '../assets/sqlIcon.svg'
import awsIcon from '../assets/awsIcon.svg'
import cyberSecIcon from '../assets/cyberSecIcon.svg'
import devOpsIcon from '../assets/devOpsIcon.svg'
import dockerIcon from '../assets/dockerIcon.svg'
import flutterIcon from '../assets/flutterIcon.svg'
import gitIcon from '../assets/gitIcon.svg'
import javaIcon from '../assets/javaIcon.svg'
import neiroIcon from '../assets/neiroIcon.svg'
import reactIcon from '../assets/reactIcon.svg'

function MediaManager(iconName) {
    const icons = {
        jsIcon: jsIcon,
        avatar: avatar,
        htmlIcon: htmlIcon,
        cssIcon: cssIcon,
        tsIcon: tsIcon,
        pythonIcon: pythonIcon,
        reactIcon: reactIcon,
        neiroIcon: neiroIcon,
        javaIcon: javaIcon,
        gitIcon: gitIcon,
        flutterIcon: flutterIcon,
        dockerIcon: dockerIcon,
        devOpsIcon: devOpsIcon,
        cyberSecIcon: cyberSecIcon,
        awsIcon: awsIcon,
        sqlIcon: sqlIcon,
    }
    if (iconName in icons) {
        return icons[iconName]
        
    } else {
        throw new Error(`Ошибка! Изображение ${iconName} не найдено.`)
    }
  }
  
export default MediaManager
  