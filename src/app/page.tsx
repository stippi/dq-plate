import Link from 'next/link';

import { siteConfig } from '@/config/site';
import PlateEditor from '@/components/plate-editor';
import { buttonVariants } from '@/components/plate-ui/button';

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Playground
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          DramaQueen Collaborative. Plate. Slate-Yjs. Hocuspocus.
        </p>
      </div>

      <div className="max-w-[1336px] rounded-lg border bg-background shadow">
        <PlateEditor />
      </div>
    </section>
  );
}
