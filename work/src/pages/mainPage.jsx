import { Container, Box, Typography, Grid } from "@mui/material";
import MediaManager from "../components/mediaManager";
import SkillCard from "../components/skillsCard"
import JavascriptIcon from '@mui/icons-material/Javascript';
import Avatar from "../components/avatar";

function MainPage() {
  return (
    <Box sx={{backgroundColor: "#6BB77B", borderRadius: "20px", padding: 5, width: "150vh", minHeight: "87vh", marginTop: 5, display: "flex", flexDirection: "column",}}>
        <Box sx={{display: "flex", flexDirection: "row", width: "50%"}}>
            <Avatar image={MediaManager("avatar")}/>
            <Typography variant="h4" sx={{display: 'inline-block'}}>Лукьянов Егор Вячеславович</Typography>
        </Box>
        <Typography variant="h1" sx={{textAlign: "center"}}>Скилы</Typography>
        <Box sx={{display: "flex", flexDirection: "row", gap: 5, marginTop: 3, marginBottom: 4}}>
            <SkillCard image={MediaManager("jsIcon")} title={"JavaScript"} description={"интерпретируемый язык программирования, который используют для написания frontend- и backend-частей сайтов, а также мобильных приложений. Часто в текстах и обучающих материалах название языка сокращают до JS. Это язык программирования высокого уровня, то есть код на нем понятный и хорошо читается."}/>
            <SkillCard image={MediaManager("htmlIcon")} title={"HTML"} description={"HTML (HyperText Markup Language — «язык гипертекстовой разметки») — самый базовый строительный блок Веба. Он определяет содержание и структуру веб-контента. Другие технологии, помимо HTML, обычно используются для описания внешнего вида/представления (CSS) или функциональности/поведения (JavaScript) веб-страницы."}/>
            <SkillCard image={MediaManager("cssIcon")} title={"CSS"} description={"CSS (англ. Cascading Style Sheets — «каскадные таблицы стилей») — формальный язык декодирования и описания внешнего вида документа (веб-страницы), написанного с использованием языка разметки (чаще всего HTML или XHTML)."}/>
            <SkillCard image={MediaManager("pythonIcon")} title={"PyTHON"} description={"Высокоуровневый язык программирования общего назначения с динамической строгой типизацией и автоматическим управлением памятью, ориентированный на повышение производительности разработчика, читаемости кода и его качества, а также на обеспечение…"}/>
        </Box>
        <Typography variant="h2" sx={{textAlign: "center"}}>Скилы, которые хотел бы приобрести</Typography>
        <Grid container spacing={1} sx={{display: "flex", flexDirection: "row", gap: 5, marginTop: 5}}>
            <SkillCard image={MediaManager("sqlIcon")} title={"SQL"} description={"Язык структурированных запросов, который используется для работы с базами данных. SQL позволяет создавать, изменять и управлять данными в базах данных, а также выполнять сложные запросы."}/>
            <SkillCard image={MediaManager("javaIcon")} title={"Java"} description={"Мощный язык программирования, который широко используется для создания корпоративных приложений, мобильных приложений, игр и веб-сервисов. Java обладает высокой производительностью и платформенной независимостью."}/>
            <SkillCard image={MediaManager("reactIcon")} title={"React"} description={"JavaScript библиотека для создания пользовательских интерфейсов. React позволяет разрабатывать динамические и отзывчивые веб-приложения, используя компонентный подход"}/>
            <SkillCard image={MediaManager("dockerIcon")} title={"Docker"} description={"платформа для разработки, доставки и запуска приложений в контейнерах. Docker облегчает управление и масштабирование приложений, а также ускоряет процесс развертывания."}/>
            <SkillCard image={MediaManager("gitIcon")} title={"Git"} description={"распределенная система управления версиями, которая используется для отслеживания изменений в коде, совместной работы разработчиков и управления кодовой базой проекта. Git позволяет эффективно управлять кодом и контролировать его версии."}/>
            <SkillCard image={MediaManager("awsIcon")} title={"AWS"} description={" облачная платформа от Amazon, предоставляющая широкий спектр услуг для разработки, хостинга и масштабирования приложений. AWS включает в себя хранилище данных, вычислительные ресурсы, сетевые сервисы и многое другое."}/>
            <SkillCard image={MediaManager("cyberSecIcon")} title={"Cybersecurity"} description={"область информационной безопасности, которая занимается защитой компьютерных систем, сетей и данных от киберугроз. Специалисты по кибербезопасности занимаются обнаружением уязвимостей, предотвращением атак и обеспечением безопасности информационных ресурсов."}/>
            <SkillCard image={MediaManager("flutterIcon")} title={"Flutter"} description={"фреймворк для разработки кроссплатформенных мобильных приложений, который позволяет создавать приложения для iOS и Android с использованием одного и того же кода. Flutter предлагает быструю разработку, высокую производительность и красивый дизайн."}/>
            <SkillCard image={MediaManager("devOpsIcon")} title={"DevOps"} description={"методология, объединяющая разработку (Development) и операции (Operations) в целях улучшения процессов разработки и доставки программного обеспечения. DevOps способствует автоматизации процессов, ускорению развертывания приложений и улучшению коммуникации между командами."}/>
            <SkillCard image={MediaManager("neiroIcon")} title={"Machine Learning"} description={"область искусственного интеллекта, которая занимается разработкой алгоритмов и моделей, позволяющих компьютерам обучаться на основе данных и делать прогнозы или принимать решения без явного программирования. Машинное обучение используется в различных областях, таких как анализ данных, распознавание образов, рекомендательные системы и многое другое."}/>
        </Grid>
    </Box>
  )
}

export default MainPage
