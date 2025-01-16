import TotalBalanceBox from "@/components/TotalBalanceBox";
import HeaderBox from "@/components/HeaderBox"
import RightSideBar from "@/components/RightSideBar";



const Home = () => {
    const loggedIn = { firstName: "Matthew", lastName: "Izoduwa", email:'izoduwamatthew@gmail.com' };
    return (
        <section className='home'>
            <div className='home-content'>
                <header className='home-header'>
                    <HeaderBox
                        type="greeting"
                        title="welcome"
                        user={loggedIn?.firstName || "Guest"}
                        subtext=" Access your account and manager your funds efficiently"
                    />
                    <TotalBalanceBox
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={1555.89}

                    />
                </header>
                recent transactions
            </div>
            <RightSideBar
                user={loggedIn}
                transactions={[]}
                banks={[{ currentBalance: 1075.8},{}]} />

        </section>
    );

};
export default Home
