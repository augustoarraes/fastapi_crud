--
-- PostgreSQL database dump
--

-- Dumped from database version 13.20
-- Dumped by pg_dump version 13.20

-- Started on 2025-04-29 13:01:53 UTC

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 3 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--

--CREATE SCHEMA public;


--
-- TOC entry 3068 (class 0 OID 0)
-- Dependencies: 3
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON SCHEMA public IS 'standard public schema';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 200 (class 1259 OID 16385)
-- Name: Produto; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."Produto" (
    id bigint NOT NULL,
    nome character varying,
    valor double precision,
    status character varying,
    estoque_min int,
    created timestamp without time zone,
    deleted boolean DEFAULT false
);


--
-- TOC entry 201 (class 1259 OID 16392)
-- Name: alembic_version; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.alembic_version (
    version_num character varying(32) NOT NULL
);


--
-- TOC entry 202 (class 1259 OID 16395)
-- Name: fastapi_produto_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.fastapi_produto_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 3069 (class 0 OID 0)
-- Dependencies: 202
-- Name: fastapi_produto_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.fastapi_produto_id_seq OWNED BY public."Produto".id;


--
-- TOC entry 2925 (class 2604 OID 16397)
-- Name: Produto id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Produto" ALTER COLUMN id SET DEFAULT nextval('public.fastapi_produto_id_seq'::regclass);


--
-- TOC entry 3060 (class 0 OID 16385)
-- Dependencies: 200
-- Data for Name: Produto; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public."Produto" VALUES (10, 'note', 200, 'A', 100, '2023-07-17 13:19:02.905234', false);
INSERT INTO public."Produto" VALUES (15, 'keyboard', 200, 'A', 100, '2023-07-17 13:42:37.360041', false);
INSERT INTO public."Produto" VALUES (16, 'quadro', 200, 'A', 100, '2023-07-17 14:59:51.577694', false);
INSERT INTO public."Produto" VALUES (20, 'mesa', 200, 'A', 100, '2023-07-17 15:31:12.76238', true);
INSERT INTO public."Produto" VALUES (21, 'box', 200, 'A', 100, '2023-07-17 19:28:12.380309', false);
INSERT INTO public."Produto" VALUES (3, 'cell', 200, 'A', 100, '2025-04-29 11:39:04.82372', false);
INSERT INTO public."Produto" VALUES (9, 'note', 200, 'A', 100, '2025-04-29 11:39:04.82372', false);
INSERT INTO public."Produto" VALUES (1, 'mochila', 30, 'A', 100, '2025-04-29 11:39:04.82372', true);
INSERT INTO public."Produto" VALUES (22, 'Mochila', 899, 'A', 100, '2025-04-29 11:37:44.506824', false);
INSERT INTO public."Produto" VALUES (2, 'monitor', 1200, 'A', 100, '2025-04-29 11:39:04.82372', false);
INSERT INTO public."Produto" VALUES (23, 'Churrasqueira Eletrica', 1300, 'A', 100, '2025-04-29 11:37:44.506824', false);


--
-- TOC entry 3061 (class 0 OID 16392)
-- Dependencies: 201
-- Data for Name: alembic_version; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.alembic_version VALUES ('86abe98f47a6');


--
-- TOC entry 3070 (class 0 OID 0)
-- Dependencies: 202
-- Name: fastapi_produto_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.fastapi_produto_id_seq', 23, true);


--
-- TOC entry 2927 (class 2606 OID 16399)
-- Name: Produto Produto_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Produto"
    ADD CONSTRAINT "Produto_pkey" PRIMARY KEY (id);


--
-- TOC entry 2929 (class 2606 OID 16401)
-- Name: alembic_version alembic_version_pkc; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.alembic_version
    ADD CONSTRAINT alembic_version_pkc PRIMARY KEY (version_num);


-- Completed on 2025-04-29 13:01:58 UTC

--
-- PostgreSQL database dump complete
--

