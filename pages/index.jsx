import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <nav>
        <ul>
          <li><Link href="/aboutus">About Us</Link></li>
          <li><Link href="/contactus">Contact Us</Link></li>
          <li><Link href="/products1">Products 1</Link></li>
          <li><Link href="/products2">Products 2</Link></li>
        </ul>
      </nav>
    </div>
  );
}
