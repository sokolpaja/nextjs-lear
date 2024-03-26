import Card from '@/components/ui/Card';
import {useTranslations} from 'next-intl';
import "../globals.css";
import { ThemeChanger } from '@/components/general/ThemeChanger';

 
export default function Index() {
  // TODO 
  // hero 
  /**
   * What you do
Why you’re different
What the key benefits are
How to get started
/\
The “how it works” section // https://buffer.com/
*Testimonials (aka, “social proof”)
*The team section
*Frequently asked questions (aka, FAQs)
   */
  const t = useTranslations();
  return <div>
    <h2 className='text-3xl underline dark:text-green-500'>asd</h2>
    <h1>{t('title')}</h1>
    {/* theme */}
    <ThemeChanger />
    <Card />
  </div>;
}