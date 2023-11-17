import './JournalItem.css';


function JournalItem(){
    return (
        <div className='journal-item'>
            <h2 className='journal-item__header'>Header</h2>
            <h2 className='journal-item__body'>
                <div className='journal-tem__date'>Date</div>
                <div className='journal-tem__text'>Text</div>
            </h2>
        </div>
    );
}

export default JournalItem;