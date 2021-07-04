import { Link,useParams,useRouteMatch, Route } from "react-router-dom"
import Discover from '../learn/Discover'
import Learn from '../learn/Learn'


export default function City(){
    const { city } = useParams()
    const { url, path } = useRouteMatch()

    console.log(url,path)

    return (

        <main className="city">
            <img src={`/images/${city}.jpg`}/>
            <div>
                <Link to={`${url}/discover`}>Discover</Link>
                <Link to={`${url}/learn`}>Learn</Link>
            </div>
            <Route path={`${path}/discover`} component={Discover} />
            <Route path={`${path}/learn`} component={Learn} />
            <Route path={`${path}/learn/topics`} component={()=> <div>topics</div>} />
        </main>
    )
}