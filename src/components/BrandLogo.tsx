import logoImage from '../assets/logo.png'

export function BrandLogo() {
  return (
    <img
      className="brand-mark"
      src={logoImage}
      alt=""
      aria-hidden="true"
    />
  )
}
