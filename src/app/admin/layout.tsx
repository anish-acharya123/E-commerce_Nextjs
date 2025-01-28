import { Nav, NavLink } from "@/components/smallcomponents/Nav";

export default function adminLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Nav>
        <NavLink href={"/admin"}>Dashboard</NavLink>
        <NavLink href={"/admin/product"}>Products</NavLink>
        <NavLink href={"/admin/users"}>Customers</NavLink>
        <NavLink href={"/admin/orders"}>Seles</NavLink>
      </Nav>
      <div>{children}</div>
    </>
  );
}
