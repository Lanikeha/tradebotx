export default function Home() {
  return (
    <div className="min-h-screen w-full relative">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <header className="w-full py-20 flex flex-col items-center text-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-purple-500/3 to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-7xl font-bold mb-6 relative">
            <span className="gradient-text" data-text="IndexNavigator">IndexNavigator</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto glow">
            Navigate the Markets with Precision - Smart Trading for DAX and NASDAQ
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]">
            Start Trading
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full relative z-10">
        <div className="container mx-auto px-4 py-12">
          {/* Trading Calendar Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 gradient-text" data-text="2025 Weekly Performance">2025 Weekly Performance</h2>
            <div className="bg-slate-900/30 backdrop-blur-sm p-6 rounded-lg border border-blue-500/10 overflow-hidden">
              {/* Calendar Header */}
              <div className="grid grid-cols-5 text-center mb-2">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div className="text-gray-300 text-sm py-2 font-medium">Monthly Total</div>
              </div>
              
              {/* Calendar Grid - January */}
              <div className="grid grid-cols-5 gap-2 mb-6">
                {/* Week 1 */}
                <div className="h-20 bg-slate-800/30 border border-blue-500/10 rounded flex flex-col p-3 hover:border-blue-500/30 transition-all duration-300">
                  <div className="flex justify-between mb-2">
                    <span className="text-xs text-gray-400">Jan 1-5</span>
                    <span className="text-xs text-white bg-blue-600 px-1.5 rounded">CW 01</span>
                  </div>
                  <div className="mt-auto text-center">
                    <span className="text-green-500 font-bold text-xl">+2.1%</span>
                  </div>
                </div>
                
                {/* Week 2 */}
                <div className="h-20 bg-slate-800/30 border border-blue-500/10 rounded flex flex-col p-3 hover:border-blue-500/30 transition-all duration-300">
                  <div className="flex justify-between mb-2">
                    <span className="text-xs text-gray-400">Jan 8-12</span>
                    <span className="text-xs text-white bg-blue-600 px-1.5 rounded">CW 02</span>
                  </div>
                  <div className="mt-auto text-center">
                    <span className="text-green-500 font-bold text-xl">+1.8%</span>
                  </div>
                </div>
                
                {/* Week 3 */}
                <div className="h-20 bg-slate-800/30 border border-blue-500/10 rounded flex flex-col p-3 hover:border-blue-500/30 transition-all duration-300">
                  <div className="flex justify-between mb-2">
                    <span className="text-xs text-gray-400">Jan 15-19</span>
                    <span className="text-xs text-white bg-blue-600 px-1.5 rounded">CW 03</span>
                  </div>
                  <div className="mt-auto text-center">
                    <span className="text-red-500 font-bold text-xl">-0.5%</span>
                  </div>
                </div>
                
                {/* Week 4 */}
                <div className="h-20 bg-slate-800/30 border border-blue-500/10 rounded flex flex-col p-3 hover:border-blue-500/30 transition-all duration-300">
                  <div className="flex justify-between mb-2">
                    <span className="text-xs text-gray-400">Jan 22-26</span>
                    <span className="text-xs text-white bg-blue-600 px-1.5 rounded">CW 04</span>
                  </div>
                  <div className="mt-auto text-center">
                    <span className="text-green-500 font-bold text-xl">+2.4%</span>
                  </div>
                </div>
                
                {/* Monthly Summary */}
                <div className="h-20 bg-blue-900/30 border border-blue-500/20 rounded flex flex-col p-3 justify-center">
                  <div className="text-center">
                    <div className="text-white text-sm mb-1">January Total</div>
                    <span className="text-green-500 font-bold text-2xl">+5.9%</span>
                  </div>
                </div>
              </div>
              
              {/* Calendar Grid - February */}
              <div className="grid grid-cols-5 gap-2 mb-6">
                {/* Week 5 */}
                <div className="h-20 bg-slate-800/30 border border-blue-500/10 rounded flex flex-col p-3 hover:border-blue-500/30 transition-all duration-300">
                  <div className="flex justify-between mb-2">
                    <span className="text-xs text-gray-400">Jan 29-Feb 2</span>
                    <span className="text-xs text-white bg-blue-600 px-1.5 rounded">CW 05</span>
                  </div>
                  <div className="mt-auto text-center">
                    <span className="text-green-500 font-bold text-xl">+1.7%</span>
                  </div>
                </div>
                
                {/* Week 6 */}
                <div className="h-20 bg-slate-800/30 border border-blue-500/10 rounded flex flex-col p-3 hover:border-blue-500/30 transition-all duration-300">
                  <div className="flex justify-between mb-2">
                    <span className="text-xs text-gray-400">Feb 5-9</span>
                    <span className="text-xs text-white bg-blue-600 px-1.5 rounded">CW 06</span>
                  </div>
                  <div className="mt-auto text-center">
                    <span className="text-green-500 font-bold text-xl">+2.3%</span>
                  </div>
                </div>
                
                {/* Week 7 */}
                <div className="h-20 bg-slate-800/30 border border-blue-500/10 rounded flex flex-col p-3 hover:border-blue-500/30 transition-all duration-300">
                  <div className="flex justify-between mb-2">
                    <span className="text-xs text-gray-400">Feb 12-16</span>
                    <span className="text-xs text-white bg-blue-600 px-1.5 rounded">CW 07</span>
                  </div>
                  <div className="mt-auto text-center">
                    <span className="text-red-500 font-bold text-xl">-0.8%</span>
                  </div>
                </div>
                
                {/* Week 8 */}
                <div className="h-20 bg-slate-800/30 border border-blue-500/10 rounded flex flex-col p-3 hover:border-blue-500/30 transition-all duration-300">
                  <div className="flex justify-between mb-2">
                    <span className="text-xs text-gray-400">Feb 19-23</span>
                    <span className="text-xs text-white bg-blue-600 px-1.5 rounded">CW 08</span>
                  </div>
                  <div className="mt-auto text-center">
                    <span className="text-green-500 font-bold text-xl">+1.9%</span>
                  </div>
                </div>
                
                {/* Monthly Summary */}
                <div className="h-20 bg-blue-900/30 border border-blue-500/20 rounded flex flex-col p-3 justify-center">
                  <div className="text-center">
                    <div className="text-white text-sm mb-1">February Total</div>
                    <span className="text-green-500 font-bold text-2xl">+5.2%</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 text-center text-gray-400 text-xs">
                <p>Past performance is not indicative of future results. Results from backtesting and live trading.</p>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 gradient-text" data-text="Smart Trading Features">Smart Trading Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-900/30 backdrop-blur-sm p-8 rounded-lg border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300">
                <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl font-bold">📈</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Different than others</h3>
                <p className="text-gray-300">Most trading bots don't use stoploss and rely on martingale position sizing which is extremely dangerous when markets move fast. These bots show gains every day until they blow up in one day. IndexNavigator is designed and backtested to be safe in volatile conditions. Using stoploss means there will be more small red days but overall results are better.</p>
              </div>
              <div className="bg-slate-900/30 backdrop-blur-sm p-8 rounded-lg border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300">
                <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl font-bold">📊</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Market Intelligence</h3>
                <p className="text-gray-300">Real-time market analysis and predictive modeling optimized specifically for indices trading. Our bot is designed to play the long side only, focusing on capturing upward market movements with precision and reliability.</p>
              </div>
              <div className="bg-slate-900/30 backdrop-blur-sm p-8 rounded-lg border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300">
                <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl font-bold">🔒</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Risk Management</h3>
                <p className="text-gray-300">Every trade is protected by server-side stoploss, preventing unusual losses even if the trading bot crashes. We strictly avoid martingale strategies and implement automatic risk-off settings during extended market downturns, ensuring your portfolio remains protected.</p>
              </div>
            </div>
          </section>

          {/* Markets Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 gradient-text" data-text="Our Markets">Our Markets</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-900/30 backdrop-blur-sm p-8 rounded-lg border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300 flex flex-col items-center">
                <h3 className="text-2xl font-bold mb-4">DAX</h3>
                <p className="text-gray-300 text-center mb-4">
                  Navigate the German market with precision. Our algorithms are specifically tuned for DAX's unique patterns.
                </p>
                <div className="mt-4 w-16 h-16 bg-blue-900/50 rounded-full flex items-center justify-center border border-blue-500/30">
                  <span className="text-2xl font-bold gradient-text" data-text="DAX">DAX</span>
                </div>
              </div>
              <div className="bg-slate-900/30 backdrop-blur-sm p-8 rounded-lg border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300 flex flex-col items-center">
                <h3 className="text-2xl font-bold mb-4">NASDAQ</h3>
                <p className="text-gray-300 text-center mb-4">
                  Trade the future of technology with confidence. Our system excels in NASDAQ's dynamic environment.
                </p>
                <div className="mt-4 w-16 h-16 bg-blue-900/50 rounded-full flex items-center justify-center border border-blue-500/30">
                  <span className="text-2xl font-bold gradient-text" data-text="NDX">NDX</span>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 gradient-text" data-text="Frequently Asked Questions">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-900/30 backdrop-blur-sm p-8 rounded-lg border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300">
                <h3 className="text-xl font-bold mb-4">Where is it available?</h3>
                <p className="text-gray-300">IndexNavigator is available exclusively on the cTrader copy platform, making it easy to start automated trading with just a few clicks.</p>
              </div>
              <div className="bg-slate-900/30 backdrop-blur-sm p-8 rounded-lg border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300">
                <h3 className="text-xl font-bold mb-4">Recommended account?</h3>
                <p className="text-gray-300">For optimal performance, we recommend using an account with 1:200 leverage for indices trading. This provides the flexibility needed for our strategy.</p>
              </div>
              <div className="bg-slate-900/30 backdrop-blur-sm p-8 rounded-lg border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300">
                <h3 className="text-xl font-bold mb-4">Minimum investment?</h3>
                <p className="text-gray-300">The minimum recommended investment to start with IndexNavigator is 100 USD. This ensures sufficient capital for our risk management strategy.</p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-blue-600/90 via-purple-600/90 to-blue-700/90 p-12 rounded-lg text-center relative overflow-hidden backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Ready to Navigate the Markets?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Join successful traders who trust IndexNavigator for precise, automated trading
              </p>
              <button className="bg-white text-blue-600 hover:bg-gray-200 font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                Get Started Now
              </button>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-blue-500/10">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">© 2024 IndexNavigator. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
