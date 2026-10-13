'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function SectorCategoryDialog({ dialogRef, category, image, gradient, units }) {
  return (
    <dialog
      className="sector-product-dialog"
      ref={dialogRef}
      aria-labelledby="sector-category-dialog-title"
      onCancel={(event) => {
        event.preventDefault();
        event.currentTarget.close();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          event.currentTarget.close();
        }
      }}
    >
      <div className="sector-category-dialog-hero">
        {image && (
          <Image src={image} alt="" fill sizes="(max-width: 760px) 100vw, 760px" />
        )}
        <div className="sector-category-dialog-overlay" style={gradient ? { background: gradient } : undefined} />
        <h2 id="sector-category-dialog-title">{category}</h2>
        <button
          type="button"
          className="sector-category-dialog-close"
          onClick={() => dialogRef.current?.close()}
          aria-label={`Tutup ${category}`}
        >
          ×
        </button>
      </div>
      <div className="sector-product-dialog-content">
        <div className="sector-category-grid">
          {units.map((unit) => (
            <Link href="/bidang" className="sector-category-card" key={unit.name}>
              <div className="sector-category-card-image">
                <Image src={unit.image} alt="" fill sizes="160px" />
              </div>
              <span>{unit.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </dialog>
  );
}
