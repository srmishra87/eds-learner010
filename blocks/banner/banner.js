export default function decorate(block) {
  const rows = [...block.children];

  const image = rows[0]?.querySelector('picture')?.outerHTML || '';
  const title = rows[1]?.innerHTML || '';
  const description = rows[2]?.innerHTML || '';
  const cta = rows[3]?.innerHTML || '';

  block.innerHTML = `
    <div class="banner-container">
      <div class="banner-image">
        ${image}
      </div>

      <div class="banner-content">
        <div class="banner-title">
          ${title}
        </div>

        <div class="banner-description">
          ${description}
        </div>

        <div class="banner-actions">
          ${cta}
        </div>
      </div>
    </div>
  `;
}
