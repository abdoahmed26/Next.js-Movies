import CreditsPerson from "./CreditsPerson";
import PersonDetails from "./PersonDetails";

const Person = ({data}:{data:any}) => {
    return (
        <div>
            <PersonDetails item={data}/>
            <CreditsPerson id={data.id} />
        </div>
    );
}

export default Person;
