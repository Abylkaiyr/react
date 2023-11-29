
import './App.css';
import CardButton from './components/CardButton/CardButton';
import Header from './components/Header/Header';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalItem from './components/JournalItem/JournalItem';
import JournalList from './components/JournalList/JournalList';
import Body from './layouts/Body/Body';
import LeftPanel from './layouts/LeftPanel/LeftPanel';

function App() {
	const data = [
		{
			title: 'Подготовка к обновлению курсов',
			text: 'Горные походы открывют удивительные приодные ландшафт',
			date: new Date()
		},
		{
			title: 'Lorem ipsum dolor sit amet.', 
			text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, vel.', 
			date: new Date()
		},
		{
			title: 'Lorem ipsum dolor sit amet consectetur.', 
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, molestiae voluptatem?', 
			date: new Date()
		}
	];
	return (
		<div className='app'>
			<LeftPanel>
				<Header/>
				<JournalAddButton></JournalAddButton>
				<JournalList>
					<CardButton>
						<JournalItem
							title={data[0].title}
							text={data[0].text}
							date={data[0].date}
						/>
					</CardButton>
					<CardButton>
						<JournalItem
							title={data[1].title}
							text={data[1].text}
							date={data[1].date}
					
						/>
					</CardButton>
					<CardButton>				
						<JournalItem
							title={data[2].title}
							text={data[2].text}
							date={data[2].date}
						/>
					</CardButton>
				</JournalList>				
			</LeftPanel>
			<Body>
				Body
			</Body>			
		</div>    
	);
}

export default App;
