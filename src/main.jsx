import React,{useState} from 'react';
import {createRoot} from 'react-dom/client';
import {Search,ShoppingBag,Heart,User,Menu,X,ChevronDown,Star,MapPin,ArrowRight} from 'lucide-react';
import './styles.css';
const products=[
 {name:'Minimal Desk Lamp',cat:'Home & Living',price:'₦38,500',rating:'4.9',img:'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80'},
 {name:'Everyday Backpack',cat:'Fashion',price:'₦52,000',rating:'4.8',img:'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80'},
 {name:'Wireless Headphones',cat:'Electronics',price:'₦86,000',rating:'4.7',img:'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80'},
 {name:'Ceramic Coffee Set',cat:'Home & Living',price:'₦29,900',rating:'4.9',img:'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=800&q=80'}
];
function App(){
 const [page,setPage]=useState('home'),[cart,setCart]=useState(0),[open,setOpen]=useState(false);
 return <div><header><div className="top">Free delivery on orders over ₦100,000</div><div className="nav"><button className="hamb" onClick={()=>setOpen(true)}><Menu/></button><div className="logo" onClick={()=>setPage('home')}>order<span>link</span></div><nav><button onClick={()=>setPage('home')}>Home</button><button onClick={()=>setPage('shop')}>Shop</button><button>Services</button><button>Opportunities</button></nav><div className="tools"><Search/><User/><button onClick={()=>setPage('cart')} className="bag"><ShoppingBag/><i>{cart}</i></button></div></div></header>
 <aside className={open?'drawer open':'drawer'}><button onClick={()=>setOpen(false)}><X/></button><button onClick={()=>{setPage('home');setOpen(false)}}>Home</button><button onClick={()=>{setPage('shop');setOpen(false)}}>Shop</button><button>Services</button></aside>
 {page==='home'&&<Home setPage={setPage}/>}
 {page==='shop'&&<Shop add={()=>setCart(cart+1)}/>}
 {page==='cart'&&<Cart cart={cart}/>}
 <footer><div className="logo">order<span>link</span></div><p>A modern marketplace for products, services, and opportunities.</p><div>© 2026 OrderLink · Front-end prototype</div></footer>
 </div>
}
function Home({setPage}){return <><section className="hero"><div><span>DISCOVER SOMETHING BETTER</span><h1>Everything worth finding,<br/><em>in one place.</em></h1><p>Shop products, discover trusted services, and connect with opportunities from people and businesses you can rely on.</p><button onClick={()=>setPage('shop')}>Explore marketplace <ArrowRight/></button></div><img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=80"/></section><section className="section"><div className="sectionHead"><div><small>CURATED FOR YOU</small><h2>Popular right now</h2></div><button onClick={()=>setPage('shop')}>View all <ArrowRight/></button></div><div className="grid">{products.map(p=><Product p={p} key={p.name}/>)}</div></section><section className="split"><div><small>FOR SELLERS</small><h2>Turn what you offer<br/>into an opportunity.</h2><p>List your products or services, reach the right customers, and grow your presence.</p><button>Start selling <ArrowRight/></button></div><div className="quote">“OrderLink is built around one simple idea: make it easier for people to find value and easier for businesses to be discovered.”</div></section></>}
function Product({p}){return <article className="product"><div className="pic"><img src={p.img}/><button><Heart/></button></div><div className="meta"><small>{p.cat}</small><h3>{p.name}</h3><div><b>{p.price}</b><span><Star/> {p.rating}</span></div></div></article>}
function Shop({add}){return <section className="shop section"><small>MARKETPLACE</small><h1>Explore everything.</h1><div className="shopbar"><div><Search/><input placeholder="Search products, services, sellers..."/></div><button>Category <ChevronDown/></button><button>Sort <ChevronDown/></button></div><div className="grid">{products.concat(products).map((p,i)=><div key={i} onClick={add}><Product p={p}/></div>)}</div></section>}
function Cart({cart}){return <section className="cart section"><small>YOUR BAG</small><h1>Shopping cart</h1><div className="cartBox"><ShoppingBag size={45}/><h2>{cart?`${cart} item${cart>1?'s':''} in your cart`:'Your cart is empty'}</h2><p>This is a front-end demonstration of the OrderLink shopping flow.</p><button>Continue shopping <ArrowRight/></button></div></section>}
createRoot(document.getElementById('root')).render(<App/>);
