import { Link } from 'react-router-dom'
import { z } from 'zod'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'

export default function SignIn() {
  const formSchema = z.object({
    nome: z
      .string()
      .min(3, { message: 'Nome deve ter no mínimo 3 caracteres' }),
    email: z.string().email({ message: 'Email inválido' }),
    senha: z
      .string()
      .min(6, { message: 'Senha deve ter no mínimo 6 caracteres' }),
  })

  type FormSchema = z.infer<typeof formSchema>

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit: SubmitHandler<FormSchema> = async (data: FormSchema) => {
    try {
      await axios({
        url: 'https://vegano-check-api-production.up.railway.app/users',
        method: 'POST',
        data: {
          nome: data.nome,
          email: data.email,
          senha: data.senha,
        },
      })
    } catch (error) {
      console.log(errors)
    }
  }

  return (
    <main className="flex h-screen w-screen">
      <div className="flex h-full w-1/3 items-center justify-end bg-neutral-800 pr-10 shadow-[5px_0px_15px_0px_rgba(0,0,0,0.75)]">
        <Link to="/">
          <h1 className="text-right text-5xl font-semibold text-neutral-50">
            🥬 Vegano Check BR
          </h1>
        </Link>
      </div>
      <div className="flex h-full w-2/3 flex-col items-center justify-center gap-5">
        <h2 className="text-2xl font-bold uppercase text-neutral-700">
          Cadastro
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div>
            <label htmlFor="nome">E-mail</label>
            <input
              {...register('nome')}
              id="nome"
              placeholder="John Snow"
              className="w-full rounded-md border-2 border-neutral-700 px-4 py-2"
            />
          </div>
          <div>
            <label htmlFor="email">E-mail</label>
            <input
              {...register('email')}
              id="email"
              placeholder="example@email.com"
              className="w-full rounded-md border-2 border-neutral-700 px-4 py-2"
            />
          </div>
          <div>
            <label htmlFor="senha">Senha</label>
            <input
              {...register('senha')}
              id="senha"
              placeholder="********"
              className="w-full rounded-md border-2 border-neutral-700 px-4 py-2"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-md border-2 border-neutral-500 bg-neutral-700 px-4 py-2 text-neutral-50"
          >
            Entrar
          </button>
        </form>
        <div className="flex gap-1 text-sm text-neutral-700">
          <span>Já é cadastrado?</span>
          <Link to="/login" className="underline">
            Faça login
          </Link>
        </div>
      </div>
    </main>
  )
}
